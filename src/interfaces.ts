import {Category} from './enums';

interface IDamageLogger {
    (p: string): void;
}

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: IDamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface IPerson2 {
    name: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (customer: string) => void;
}

interface IMagazine {
    title: string;
    publisher: string;
}

interface IShelfItem {
    title: string;
}

interface LibMgrCallback <T>{
    (err: Error, data: T[]): void;
}

export {
    IBook,
    IDamageLogger,
    Person,
    Author,
    Librarian,
    IPerson2,
    IMagazine,
    IShelfItem,
    LibMgrCallback
};