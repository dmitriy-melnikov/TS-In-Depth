import * as Interfaces from './interfaces';
import { IBook } from './interfaces';

type BookProperties  = keyof Interfaces.IBook;

type BookOrUndefined = Interfaces.IBook | undefined;

type PersonBook = Interfaces.Person & Interfaces.IBook & Interfaces.IPerson2;

type BookRequiredField = Required<IBook>;

type UpdatedBook = Partial<IBook>;

type AuthorEmail = Omit<Interfaces.Author, 'email'>;

export {
    BookOrUndefined,
    BookProperties,
    PersonBook,
    BookRequiredField,
    UpdatedBook,
};