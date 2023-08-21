import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ){}



    async signUp(signUpDto: SignUpDto): Promise<string>{
        const {email} = signUpDto;


        const existingEmail = await this.userModel.findOne({email}).exec()

        if(existingEmail){
            throw new UnauthorizedException('Email already exists')
        }

        const user =  new this.userModel(signUpDto)
        const hashedPassword = await bcrypt.hash(user.password, 10)

        user.password = hashedPassword

        await user.save();


        

        const token = this.jwtService.sign({id: user._id})


        return ('registered')
    }


    async login(loginDto: LoginDto): Promise <{ token: string}>{
        const {email, password} = loginDto;

        const user = await this.userModel.findOne({ email})

        if(!user){
            throw new UnauthorizedException('Invalid email or password')
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched){
            throw new UnauthorizedException('invalid email or password')
        }

        const token = this.jwtService.sign({id: user._id})

        return { token }
    }
}
