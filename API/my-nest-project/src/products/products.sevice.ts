import { Injectable, NotFoundException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose'
import { Product } from "./products.model";
import { NotFoundError } from "rxjs";
import { Model } from "mongoose";

@Injectable()
export class ProductService {
    private products: Product[]=[];

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    async insertProduct(title: string, desc: string, price: number){
        const newProduct = new this.productModel({
            title: title, 
            description: desc, 
            price: price,})
            const result = await newProduct.save();
            return result.id as string

    }

    async getProducts(){
        const products = await this.productModel.find().exec();
        return products.map((prod) => ({
            id: prod.id, 
            title: prod.title, 
            price: prod.price,
            description: prod.desc}))
    }

    async getSingleProduct(productId: string){
        const product = await this.findProduct(productId);
        return {
            id: product.id,
            title: product.title,
            description: product.desc,
            price: product.price

        }
    }

    async updateProduct(productId: string, title: string, desc: string, price: number){
        const updatedProduct = await this.findProduct(productId);


        if(title){
            updatedProduct.title = title
        }
        if(desc){
            updatedProduct.desc = desc
        }
        if(price){
            updatedProduct.price = price
        }
        updatedProduct.save();
    }



    private async  findProduct(id: string): Promise<Product>{
        let product;
        try {
             product = await this.productModel.findById({id});
        } catch (error) {
            throw new NotFoundException('Could not find product')
        }
        if(!product){
            throw new NotFoundException('could not find product')
        }
        
    return product
    }

    async deleteProduct(prodId: string){
        
        const result = await this.productModel.deleteOne({_id: prodId}).exec()
        if(result.deletedCount === 0){
            throw new NotFoundException('could not find product')
        }
    }
}