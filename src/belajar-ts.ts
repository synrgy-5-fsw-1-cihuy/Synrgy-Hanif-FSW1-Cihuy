// npm init -y utk create package.json
// npx tsc --init utk create tsconfig

import Dog from "./dog/dog";
import Circle from "./shape/circle";
import Parallegram from "./shape/parallegram";
import Rectangle from "./shape/rectangle";
import Rhombus from "./shape/rhombus";
import Square from "./shape/square";
import Triangle from "./shape/triangle";

export default function main(): string {
    // console.log(`Hello Typescript`);
    // console.log(`ulululllulu`);
    // console.log(`alalallaa`);
    // console.log(`oololololo`);
    // console.log(`iillilili`);

    // const anjing = new Dog("Bleki", "Black");
    // console.log(anjing.getName());
    // console.log(anjing.getColor());

    console.log("=====Persegi=====");
    const persegiA = new Square(20);
    console.log(persegiA.luas());
    console.log(persegiA.keliling());

    console.log("=====Persegi Panjang=====");
    const persegiPanjang = new Rectangle(20, 40);
    console.log(persegiPanjang.luas());
    console.log(persegiPanjang.keliling());

    console.log("=====Segitiga=====");
    const segitigaA = new Triangle(3, 4);
    console.log(segitigaA.luas());
    console.log(segitigaA.keliling());

    console.log("=====Lingkaran=====");
    const lingkaranA = new Circle(5);
    console.log(lingkaranA.luas());
    console.log(lingkaranA.keliling());

    console.log("=====Belah Ketupat=====");
    const belahKetupat = new Rhombus(24, 18, 15);
    console.log(belahKetupat.luas());
    console.log(belahKetupat.keliling());

    console.log("=====Jajar Genjang=====");
    const jajarGenjang = new Parallegram(12, 13, 15);
    console.log(jajarGenjang.luas());
    console.log(jajarGenjang.keliling());
    
    return `Hello Typescript`;
}


main();