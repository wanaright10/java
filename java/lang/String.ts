export class String {
    private str: string;

    constructor(str: string) {
        this.str = str;
    }

    length() {
        return this.str.length;
    }

    isEmpty() {
        return this.str.length === 0;
    }

    charAt(index: number) {
        if (index < 0 || index >= this.str.length) {
            return undefined;
        }
        return this.str.charAt(index);
    }

    getChars() {
        return this.str.split('');
    }

    equals(str: string) {
        return this.str === str;
    }

    equalsIgnoreCase(str: string) {
        return (this.str === str) ? true :
            str !== null && str !== undefined && this.str.length === str.length &&
            this.str.toLocaleLowerCase() === str.toLocaleLowerCase();
    }

    startWith(str: string) {
        if (str !== null && str !== undefined) {
            return this.str.indexOf(str) === 0;
        }
        return undefined;
    }

    endWith(str: string) {
        if (str !== null && str !== undefined) {
            return this.str.lastIndexOf(str) === this.str.length - str.length
        }
        return undefined;
    }

    indexOf(str: string) {
        return this.str.indexOf(str);
    }

    lastIndexOf(str: string) {
        return this.str.lastIndexOf(str);
    }

    substring(start: number, end: number) {
        if (end) {
            return this.str.substring(start, end);
        }
        return this.str.substring(start);
    }

    concat(str: string) {
        this.str += str;
        return this;
    }

    toString() {
        return this.str;
    }
}