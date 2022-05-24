import { Controller, Get } from "routing-controllers";
import { CategoryService } from "../services/categoryService";

@Controller()
export class CategoryController {
    private readonly categoryService = new CategoryService();

    @Get('/category/getAllCategories')
    async getOne() {
        const allCategories = await this.categoryService.GetAllCategories();
        return allCategories;
    }
}