import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ContactModule } from './contact/contact.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ContactModule,
    CategoriesModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: 'localhost',
      database: 'Nostra',
      storage: './database/Nostra.db',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
})
export class AppModule {}