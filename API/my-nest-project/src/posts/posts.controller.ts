import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostsDto, multerOptions } from './dto/post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService){

    }
    @Post('/post')
    @UseInterceptors(FileInterceptor('image', multerOptions))
    async makePost(@UploadedFile() image: Express.Multer.File, @Body() postsDto: PostsDto){
        const user = await this.postService.makePost(postsDto, image)
    }

    @Get()
    async getAllPosts(){
        return await this.postService.getPosts();
    }

    @Get(':id')
    async getPost(@Param('id') postId: string){
        return await this.postService.getPost(postId)
    }

    @Patch(':id')
    async updatePost(
        @Param('id') postId: string,
        @Body() postsDto: PostsDto,
        @UploadedFile() image: Express.Multer.File
    ){
        await this.postService.updatePosts(postId, postsDto, image);
        return "updated"
    }

    @Delete(':id')
    async removePost(@Param('id') postId: string){
        await this.postService.deletePost(postId)
        return "deleted"
    }
}
