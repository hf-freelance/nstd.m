import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'graphql-subscriptions';
import { ContactService } from './contact.service';
import { Contact, CreateContactInput } from 'src/schema.graphql';

// const pubSub = new PubSub();

@Resolver('Contact')
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Query('contacts')
  async getContacts() {
    return this.contactService.findAll();
  }

  @Mutation('createContact')
  async create(@Args('CreateContactInput') args: CreateContactInput): Promise<Contact> {
    const newContact = await this.contactService.create(args);
    // pubSub.publish('contactCreated', { contactCreated: newContact });
    return newContact;
  }
}