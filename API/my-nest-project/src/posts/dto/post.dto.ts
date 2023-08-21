import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty} from 'class-validator';
import { Express } from 'express';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { PartialType } from '@nestjs/mapped-types';





export class PostsDto {

  @ApiProperty()
  @IsNotEmpty()
  header: string;

  @ApiProperty()
  @IsNotEmpty()
  imageDesc: string;

  @ApiProperty()
  @IsNotEmpty()
  news: string;

  @ApiProperty()
  @IsNotEmpty()
  date: string;

  

  

  
}
export class CreateImageDto extends PartialType(PostsDto) {
  @ApiProperty({ type: 'string', format: 'binary' })
  image: Express.Multer.File;
}




export const multerOptions: MulterOptions = {
  dest: './uploads', // Specify the directory where the uploaded files will be stored
};




