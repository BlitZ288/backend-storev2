import { Controller, Get } from "routing-controllers";
import { ProductService } from "../services/productService";

@Controller()
export class ProductController {
    private readonly productService = new ProductService();

    @Get('/product/getAllProduct')
    async getProducts() {
        const allProducts = await this.productService.GetAllProducts();
        return allProducts;
    }
}