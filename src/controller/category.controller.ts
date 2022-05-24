import { Controller, Get } from "routing-controllers";
import { CategoryService } from "../services/categoryService";

@Controller('/category')
export class CategoryController {
    private readonly categoryService = new CategoryService();

    @Get('/getAllCategories')
    async getOne() {
        const allCategories = await this.categoryService.GetAllCategories();
        return allCategories;
    }
}