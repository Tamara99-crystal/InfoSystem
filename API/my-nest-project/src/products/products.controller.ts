import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common'
import { ProductService } from './products.sevice';

@Controller('products')

export class ProductsController {
    constructor(private readonly productsService: ProductService){}
    @Post()
    async addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
        ){
        const generatedId =await this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
        return {id: generatedId};
    }

    @Get()
    async getAllProducts(){
        return await this.productsService.getProducts();
    }

    @Get(':id')
    async getProduct(@Param('id') prodId: string){
        return await this.productsService.getSingleProduct(prodId)
    }

    @Patch(':id')
    async updateProduct(
        @Param('id') prodId: string, 
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
        ){
        await this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice)
        return "updated"
    }


    @Delete(':id')
    async removeProduct(@Param('id') prodId: string){
        await this.productsService.deleteProduct(prodId)
        return "deleted"
    }



} 