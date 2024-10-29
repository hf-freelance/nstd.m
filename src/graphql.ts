
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateContactInput {
    mail: string;
    name: string;
    object: string;
    content: string;
}

export abstract class IQuery {
    abstract contact(name: string): Nullable<Contact> | Promise<Nullable<Contact>>;

    abstract contacts(): Nullable<Nullable<Contact>[]> | Promise<Nullable<Nullable<Contact>[]>>;
}

export class Contact {
    id: string;
    mail: string;
    name: string;
    object: string;
    content: string;
}

export class Item {
    id: string;
    title: string;
    caption: string;
    imgReference: string;
    categoryName?: Nullable<string>;
}

export class Category {
    idCategory: string;
    label: string;
}

export abstract class IMutation {
    abstract createContact(createContactInput: CreateContactInput): Nullable<Contact> | Promise<Nullable<Contact>>;
}

type Nullable<T> = T | null;
