import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CategoriesService } from './categories.service';
import { Category } from 'src/schema.graphql';

@Resolver('Categories')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Query('Categories')
  async getCategories() {
    return this.categoriesService.findAll();
  }
}