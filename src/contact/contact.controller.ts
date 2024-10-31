import { Controller, Get, Body, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

import { Contact, CreateContactInput } from 'src/schema.graphql';

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/contact')
  async getMessages(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Post('/contact')
  postContact(@Body('data') data: CreateContactInput) : Contact {
    return this.contactService.create(data);
  }
}