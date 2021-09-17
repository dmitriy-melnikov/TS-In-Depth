import * as Interfaces from './interfaces';
import * as Enums from './enums';
import { Category } from './enums';
import * as Classes from './classes';
import * as Types from './types';
import * as Functions from './functions';
import Encyclopedia from './encyclopedia';

// showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
// boolean, string, number, symbol, bigint
// Array, ReadonlyArray, Tuple, readonly Tuple, enum, any, void
// Function, object/Object, null, undefined, never, unknown

// ===================================================================================
// logFirstAvailable(getAllBooks())
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// console.log(calcTotalPages());

// Task 0202
// ++++++++++++++++++++++++++++++++++++++++++++functions
// Task 03.01

const myID = Functions.createCustomerID('Ann', 10);
// console.log(myID);
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${name}-${id}`;
idGenerator = Functions.createCustomerID;
// console.log(idGenerator('Boris', 20));

// Task 03.02
// createCustomer('Boris');
// createCustomer('Boris', 10);
// createCustomer('Boris', void 'sf', 'Kyiv');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));
// const myBooks = сheckoutBooks('Ann', 1,2,4);
// console.log(myBooks);

// Task 03.03

// getTitles(3, true);
// console.log(getTitles(false));
// console.log(getTitles(true));
// console.log(getTitles(2,false));

// Task 03.04


/* function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
} */

// console.log(bookTitleTransform('hello'));
// console.log(bookTitleTransform(22));

// Task 04.01

const myBook: Interfaces.IBook = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Enums.Category.CSS,
    markDamaged: (reason: string) => console.log(`Damage: ${reason}`)
};

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02

const logDamage: Interfaces.IDamageLogger = (reason: string) => console.log(`Damage: ${reason}`);
// logDamage('missing back cover');

// Task 04.03

const  favoriteAuthor: Interfaces.Author = {
    name: 'Anna',
    email: 'anna@example.com',
    numBooksPublished: 1
};
/* const favoriteLibrarian: Interfaces.Librarian = {
    name: 'Boris',
    email: 'boris@example.com',
    department: 'Classic Literature',
    assistCustomer: (customerName: string) => console.log(customerName)
};* /
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
/* console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]) ; */

// Task 04.05
// console.log(getProperty(myBook, 'title'));
// getProperty(myBook, 'markDamaged');
// getProperty(myBook, 'isbn');

// ++++++++++++++++++++++++++++++++++++++++Classes
// Task 05.01

// const ref: Classes.ReferenceItem = new Classes.ReferenceItem(5, 'Typescript', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Some abs';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02 / Task 05.03
// const refBook: Classes.Encyclopedia = new Classes.Encyclopedia(5, 'Typescript', 2020, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();
// Task 05.04
const favoriteLibrarian: Interfaces.Librarian = new Classes.UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris');

// +++++++++++++++++++++++++++++++++++++++++intersection and union types
// Task 05.05
const personBook: Types.PersonBook = {
    name: 'Anna',
    email: 'anna@dfdf.com',
    id: 1,
    author: 'Anna',
    category: Enums.Category.Angular,
    title: 'Use Angular',
    available: true
};

// ++++++++++++++++++++++++++++++++++++++++++++++++Modules and Namespaces

// Task 06.01
/* const flag = true;
if (flag) {
    const module = await import('./classes');
    const reader = new module.Reader();
    console.log(reader);
    reader.name = 'Anna';
    reader.take(Functions.getAllBooks()[2]);
}

// const library = new Library()
const library: Library = {
    Id: 1,
    name: 'Ann',
    address: 'some...'
} */
// Task 07.01
const inventory: Array<Interfaces.IBook> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Enums.Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Enums.Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Enums.Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Enums.Category.Software }
];
/* const result  = Functions.purge<Interfaces.IBook>(inventory);
const result1  = Functions.purge<number>([1,2,3,4]);
console.log(result);
console.log(result1); */

// Task 07.02

const bookshelf = new Classes.Shelf<Interfaces.IBook>();
inventory.forEach(book => bookshelf.add(book));
console.log(bookshelf.getFirst().title);

const magazine = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShell = new Classes.Shelf<Interfaces.IMagazine>();
magazine.forEach(magazine => magazineShell.add(magazine));
console.log(magazineShell.getFirst().title);
magazineShell.printTitles();
console.log(magazineShell.find('Five Points'));

console.log(Functions.getProperty(Functions.getAllBooks()[0], 'author'));

const book: Types.BookRequiredField = {
    id: 1,
    author: 'Ann',
    available: false,
    category: Category.Angular,
    markDamaged: null,
    pages: 120,
    title: 'Title'
};
const uniLib = new Classes.UniversityLibrarian();
console.log(uniLib);
uniLib.name = 'Anna';
uniLib['printLibrarian']?.();
// uniLib.assistCommunity = null;
console.log(uniLib.name);

/* const propDec = new Encyclopedia(1, 'Book', 2020, 2);
propDec.copies = 10;
console.log(propDec.copies);
propDec.copies = 2.3;
console.log(propDec.copies); */

Functions.getBookByCategory(Category.JavaScript, Functions.logCategorySearch);
Functions.getBookByCategory(Category.Software, Functions.logCategorySearch);