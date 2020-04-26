export class Map<T> {
    private obj: object;

    constructor() {
        this.obj = {};
    }

    put(key: string, value: T) {
        this.obj[key] = value;
    }

    get(key: string) {
        return this.obj[key];
    }

    keys() {
        return Object.keys(this.obj);
    }

    values() {
        return Object.keys(this.obj).map(key => this.obj[key]);
    }

    forEach(callback: (key: string, value: string) => void) {
        Object.keys(this.obj).forEach(key => {
            callback(key, this.obj[key]);
        });
    }

    putAll(map: Map<T>) {
        map.forEach((key, value) => {
            this.obj[key] = value;
        });
    }
}