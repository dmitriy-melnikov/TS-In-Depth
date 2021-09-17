import * as Interfaces from './interfaces';
import {IBook} from './interfaces';
import {sealed, Logger, writable, format} from './decorators';


abstract class ReferenceItem {
    /* title: string;
    year: number;
    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    } */
    readonly #id: number;
    private _publisher: string;
    static department: string = 'Research';
    constructor (id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }
    getID(): number {
        return this.#id;
    }
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`${this.title} was published in department ${ReferenceItem.department}`);
    }
    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }
    abstract printCitation(): void;
}
// @sealed('Hello')
// @Logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;
    assistCustomer(customerName: string): void {
        console.log(`${this.name} is assisting ${customerName}`);
    }
    @writable(true)
    assistFaculty(): void {
        console.log('Assist faculty');
    }
    @writable(false)
    assistCommunity(): void {
        console.log('Assist community');
    }
}

class Reader {
    name: string;
    books: IBook[] = [];
    take(book: IBook): void {
        this.books.push(book);
    }

}

class Shelf<T extends Interfaces.IShelfItem> {
    private items: Array<T > = [];

    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {
        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}

export {
    UniversityLibrarian,
    ReferenceItem,
    Reader,
    Shelf,
};