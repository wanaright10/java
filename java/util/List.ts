export class List<T> {
    private values: T[];

    constructor() {
        this.values = [];
    }

    add(value: T) {
        this.values.push(value);
    }

    toArrays() {
        return this.values;
    }

    addAll(values: List<T>) {
        values.forEach(value => {
            this.values.push(value);
        });
    }

    forEach(callback: (value: T) => void) {
        this.values.forEach(value => {
            callback(value);
        });
    }

    size() {
        return this.values.length;
    }

    isEmpty() {
        return this.values.length === 0
    }
}