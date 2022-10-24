import Shape from "./shape";

export default class Parallegram implements Shape {
    private alas: number = 0;
    private tinggi: number = 0;
    private sisiMiring: number = 0;

    constructor(alas: number, tinggi: number, sisiMiring: number) {
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisiMiring = sisiMiring;
    }
    
    luas(): number {
        return (this.alas * this.tinggi);
    }

    keliling(): number {
        return 2 * (this.alas + this.sisiMiring);
    }
}