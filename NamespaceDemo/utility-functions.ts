namespace Utility {
    export namespace Fees {
        export function calculateLateFee(dayslate: number): number {
            return dayslate * 0.25;
        }
    }
    export function maxBooksAllowed(age: number): number {
        return  age < 12 ? 3 : 10;
    }
    function privateFunc(): void {
        console.log('This si private func');
    }
}