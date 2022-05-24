import { AppDataSource } from "../data-source";
import { Product } from "../entity/Product";

export class ProductService {

    private readonly productRepository = AppDataSource.getRepository(Product);

    public async GetAllProducts() {
        return await this.productRepository.find({ relations: { descriptions: true } });
    };
}