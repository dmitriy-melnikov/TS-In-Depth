import * as Interfaces from './interfaces';
import * as Enums from './enums';
import * as Types from './types';
import { ReferenceItem } from './classes';

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('Value sholud be string');
    }
}

/* export function printRefBook(data: any): void {
    if (assertStringValue(data) instanceof ReferenceItem) {
        data.printItem();
    }
} */

export function getAllBooks(): readonly Interfaces.IBook[] {
    const books: readonly Interfaces.IBook[] = 	<const>[
        { id: 1, title: 'Refactoring JavaScript', category: Enums.Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Enums.Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets',category: Enums.Category.CSS,  author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Enums.Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];
    return books;
}

export function getBookTitlesByCategory(category: Enums.Category = Enums.Category.JavaScript): Array<string> {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(titles: string[]): void{
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const {title, author} = books[index];
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    const result = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, BigInt(0));
    return result;
}

export function logFirstAvailable(books: ReadonlyArray<object> = getAllBooks()): void{
    const numberOfBooks = books.length;
    const title: string = (books.find((book: any) => book.available) as any)?.title;
    console.log('number of books ', numberOfBooks);
    console.log('first available ', title);
}

export function createCustomerID(name: string, id: number): string {
    return  `${name}-${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`customer name: ${name}`);
    if (age) {
        console.log(`customer age: ${age}`);
    }
    if (city) {
        console.log(`customer city: ${city}`);
    }
}

export function getBookByID(id: number): Types.BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIDS: number[]): string[] {
    console.log(`customer name: ${customer}`);
    return bookIDS
        .map(id => getBookByID(id))
        .filter(book => book?.available)
        .map(book => book.title);
}

/* eslint-disable no-redeclare */
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if(args.length ===1){
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    }else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

export function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function printBook(book: Interfaces.IBook): void {
    console.log(`${book.title} by ${book.author}`);
}

/* export function getProperty(book: Interfaces.IBook, prop: Types.BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function)('hello');
    }
    return book[prop];
} */
export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        // return (obj[prop] as Function).name;
        return obj[prop]['name'];
    }
    return obj[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}
export function getBookByCategory(category: Enums.Category, callback: Interfaces.LibMgrCallback<string>) {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0){
                callback(null, titles);
            } else {
                throw new Error('nothing');
            }
        }catch (err) {
            callback(err, null);
        }
    });
}
export function logCategorySearch(err: Error, titles: string[]) {
    if (err) {
        console.log(err.message);
    }else {
        console.log(titles);
    }
}
