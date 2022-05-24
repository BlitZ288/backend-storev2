import { AppDataSource } from "../data-source";
import { Category } from "../entity/Category";

export class CategoryService {

    private readonly categoryRepository = AppDataSource.getRepository(Category);

    public async GetAllCategories() {
        return await this.categoryRepository.find({ relations: { subcategories: true } });
    };
}