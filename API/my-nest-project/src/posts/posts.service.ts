import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from './schemas/posts.schema';
import { Model } from 'mongoose';
import { PostsDto } from './dto/post.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel(Posts.name)
        private postsModel: Model<Posts>,

    ){}

    async makePost(postsDto: PostsDto, image: Express.Multer.File): Promise <string>{
        const newPost = new this.postsModel(postsDto)
        newPost.image = image.path;
        await newPost.save()
        return ('Posted')
    }
    async getPosts(){
        const posts = await this.postsModel.find().exec()
        return posts
    }


    async getPost(postId: string){
        try {
            const post = await this.postsModel.findById(postId)
            return post
        } catch (error) {
            throw new NotFoundException('coud not find the post')
        }
        
    }


    async updatePosts(
        postId: string, 
        postsDto: PostsDto,
        image: Express.Multer.File
        ){
           const post = await this.postsModel.findById(postId)
           const {header, news, imageDesc, date} = postsDto
           if(header){
            post.header = header
           }
           if(news){
            post.news = news
           }
           if(imageDesc){
            post.imageDesc = imageDesc
           }
           if(date){
            post.date = date
           }
           if(image){
            post.image = image.path
           }
            post.save();
        }
        async deletePost(postId: string){
            const post = await this.postsModel.deleteOne({_id: postId}).exec()
            return 'deleted'
        }

   
}
