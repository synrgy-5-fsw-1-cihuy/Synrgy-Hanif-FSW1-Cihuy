"use strict";
// npm init -y utk create package.json
// npx tsc --init utk create tsconfig
exports.__esModule = true;
var circle_1 = require("./shape/circle");
var parallegram_1 = require("./shape/parallegram");
var rectangle_1 = require("./shape/rectangle");
var rhombus_1 = require("./shape/rhombus");
var square_1 = require("./shape/square");
var triangle_1 = require("./shape/triangle");
function main() {
    // console.log(`Hello Typescript`);
    // console.log(`ulululllulu`);
    // console.log(`alalallaa`);
    // console.log(`oololololo`);
    // console.log(`iillilili`);
    // const anjing = new Dog("Bleki", "Black");
    // console.log(anjing.getName());
    // console.log(anjing.getColor());
    console.log("=====Persegi=====");
    var persegiA = new square_1["default"](20);
    console.log(persegiA.luas());
    console.log(persegiA.keliling());
    console.log("=====Persegi Panjang=====");
    var persegiPanjang = new rectangle_1["default"](20, 40);
    console.log(persegiPanjang.luas());
    console.log(persegiPanjang.keliling());
    console.log("=====Segitiga=====");
    var segitigaA = new triangle_1["default"](3, 4);
    console.log(segitigaA.luas());
    console.log(segitigaA.keliling());
    console.log("=====Lingkaran=====");
    var lingkaranA = new circle_1["default"](5);
    console.log(lingkaranA.luas());
    console.log(lingkaranA.keliling());
    console.log("=====Belah Ketupat=====");
    var belahKetupat = new rhombus_1["default"](24, 18, 15);
    console.log(belahKetupat.luas());
    console.log(belahKetupat.keliling());
    console.log("=====Jajar Genjang=====");
    var jajarGenjang = new parallegram_1["default"](12, 13, 15);
    console.log(jajarGenjang.luas());
    console.log(jajarGenjang.keliling());
    return "Hello Typescript";
}
exports["default"] = main;
main();
