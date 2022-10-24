import Shape from "./shape";

export default class Triangle implements Shape {
    private alas: number = 0;
    private tinggi: number = 0;

    constructor(alas: number, tinggi: number) {
        this.alas = alas;
        this.tinggi = tinggi;
    }
    
    luas(): number {
        return (this.alas * this.tinggi) / 2;
    }

    keliling(): number {
        return this.alas + this.tinggi + Math.sqrt((this.alas**2) + (this.tinggi**2));
    }
}