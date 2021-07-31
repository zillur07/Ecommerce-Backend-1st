import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from '../services/product.service';


@Controller()
export class ProductController {
    constructor(private productService: ProductService){
        
    }
    @Get('/products')
    getAllProducts() {
        return this.productService.getAllProducts()
        
    }

    @Post('/addProduct')
    addProduct(@Body() body ){
       return this.productService.addProduct(body);
    }

    @Put('/updateProduct/:id')
    updateProduct(@Body() body, @Param('id') id){
       return this.productService.updateProduct(id, body);
    }

    @Delete('/deleteProduct/:id')
    deleteProduct(@Param('id') id){
       return this.productService.deleteProduct(id);
    }
}
