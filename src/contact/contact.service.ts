import { Contact, CreateContactInput } from '../schema.graphql';
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ContactService {
  constructor(private sequelize: Sequelize) {}

  private readonly messages: Contact[] = [
    { id: "01", mail: 'a@b.com', name: "Hey", object: "Test", content: "Post" }
  ];
  
  getHello(): string {
    return 'Bonjour!';
  }

  getOk(): Array<string> {
    return ['1512','4826','3255','2845']
  }

  findAll(): Contact[] {
    return this.messages;
  }

  create(data: CreateContactInput): Contact {
      let newContact = new Contact();
      newContact = {...data, id: '0' + this.messages.length + 1}
      this.messages.push(newContact);
      return newContact;
  }
}
