import Shape from "./shape";

export default class Square implements Shape {
    private sisi: number = 0;

    constructor(sisi: number) {
        this.sisi = sisi;
    }

    luas(): number {
        return this.sisi * this.sisi;
    }

    keliling(): number {
        return 4 * this.sisi;
    }

    getSisi() {
        return this.sisi;
    }

    setSisi(sisi: number) {
        this.sisi = sisi;
    }
}