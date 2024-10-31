import { Category } from '../schema.graphql';
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CategoriesService {
  constructor(private sequelize: Sequelize) {
  }

  async findAll(): Promise<Category[] | any> {
    return await this.sequelize.query('SELECT * FROM Category;').then((cat) => cat[0]);
  }

  async create(label:String): Promise<Category | any> {
    return await this.sequelize.query('INSERT INTO Category (label) VALUES (\'' + label + '\')');
  }
}
