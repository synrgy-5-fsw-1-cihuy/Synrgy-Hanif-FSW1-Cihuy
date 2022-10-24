import Shape from "./shape";

export default class Rectangle implements Shape {
    private panjang: number = 0;
    private lebar: number = 0;

    constructor(panjang: number, lebar: number) {
        this.panjang = panjang;
        this.lebar = lebar;
    }
    
    luas(): number {
        return this.panjang * this.lebar;
    }

    keliling(): number {
        return 2 * (this.panjang + this.lebar);
    }
}