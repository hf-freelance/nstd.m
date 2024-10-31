import { Controller, Get, Body, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from 'src/schema.graphql';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('/categories')
  async getCategories(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post('/categories')
  async postCategories(label: String): Promise<Category> {
    return this.categoriesService.create(label);
  }
}