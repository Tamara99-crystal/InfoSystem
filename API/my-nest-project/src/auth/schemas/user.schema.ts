import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'


@Schema ({
    timestamps: true
})

export class User extends Document{
    @Prop()
    firstname: string

    @Prop()
    lastname: string

    @Prop()
    username: string

    @Prop({unique: [true, 'duplicate email entered']})
    email: string

    @Prop()
    password: string

    @Prop()
    role: string
}


export const UserSchema = SchemaFactory.createForClass(User)