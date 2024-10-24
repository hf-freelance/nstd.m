import { Controller, Get, Body, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact, CreateContactInput } from 'src/schema.graphql';

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/')
  getHello(): string {
    return this.contactService.getHello();
  }

  @Get('/contact')
  getMessages(): Contact[] {
    return this.contactService.findAll();
  }

  @Post('/contact')
  postContact(@Body('data') data: CreateContactInput) : Contact {
    console.log('1data', data);
    return this.contactService.create(data);
  }
}