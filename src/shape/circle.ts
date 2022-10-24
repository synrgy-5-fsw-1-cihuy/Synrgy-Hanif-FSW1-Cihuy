import Shape from "./shape";

export default class Circle implements Shape {
    private jarijari: number = 0;

    constructor(jarijari: number) {
        this.jarijari = jarijari;
    }
    
    luas(): number {
        return 2 * 3.14 * this.jarijari;
    }

    keliling(): number {
        return 3.14 * (this.jarijari**2);
    }
}