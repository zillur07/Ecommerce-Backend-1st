import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../models/product';

@Injectable()
export class ProductService {
    
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}
    async getAllProducts() {

        try {
            return await this.productModel.find();
        } catch (error) {
            return error;
        }
    }

    async addProduct(body) {

        try {
            const productData =  new this.productModel(body);
           await  productData.save();
           return {
               massage: 'Product Created Successfully',
               status: 'Success',
               statusCode: 201,
           }
        } catch (error) {
            return error;
        }
    }
    async updateProduct(id, body) {
        try {
           await  this.productModel.findByIdAndUpdate(id, body).exec();
           return {
               massage: 'Product Update Successfully',
               status: 'Success',
               statusCode: 204,
           }
        } catch (error) {
            return error;
        }
    }

    async deleteProduct(id) {
        try {
           await  this.productModel.findByIdAndDelete(id).exec();
           return {
               massage: 'Product Delete Successfully',
               status: 'Success',
               statusCode: 200,
           }
        } catch (error) {
            return error;
        }
    }
}
