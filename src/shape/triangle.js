"use strict";
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle(alas, tinggi) {
        this.alas = 0;
        this.tinggi = 0;
        this.alas = alas;
        this.tinggi = tinggi;
    }
    Triangle.prototype.luas = function () {
        return (this.alas * this.tinggi) / 2;
    };
    Triangle.prototype.keliling = function () {
        return this.alas + this.tinggi + Math.sqrt((Math.pow(this.alas, 2)) + (Math.pow(this.tinggi, 2)));
    };
    return Triangle;
}());
exports["default"] = Triangle;
