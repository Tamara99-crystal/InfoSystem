import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



@Schema({
  timestamps: true
})


export class Posts extends Document {
  @Prop()
  header: string;

  @Prop()
  imageDesc: string;

  @Prop()
  news: string;


  @Prop()
  date: string;


  @Prop()
  image: string; // Store the image path
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
