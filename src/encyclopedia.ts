import { ReferenceItem } from './classes';
import * as Decorators from './decorators';

export default class extends ReferenceItem{
    private _copies: number;
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }
    @Decorators.positiveInteger
    set copies(value) {
        // eslint-disable-next-line no-underscore-dangle
        this._copies = value;
    }
    get copies(): number {
        // eslint-disable-next-line no-underscore-dangle
        return this._copies;
    }
    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition}  ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}