import Shape from "./shape";

export default class Rhombus implements Shape {
    private diagonalA: number = 0;
    private diagonalB: number = 0;
    private sisi: number = 0;

    constructor(diagonalA: number, diagonalB: number, sisi: number) {
        this.diagonalA = diagonalA;
        this.diagonalB = diagonalB;
        this.sisi = sisi;
    }
    
    luas(): number {
        return (this.diagonalA * this.diagonalB) / 2;
    }

    keliling(): number {
        return 4 * this.sisi;
    }
}