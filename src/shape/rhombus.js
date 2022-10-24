"use strict";
exports.__esModule = true;
var Rhombus = /** @class */ (function () {
    function Rhombus(diagonalA, diagonalB, sisi) {
        this.diagonalA = 0;
        this.diagonalB = 0;
        this.sisi = 0;
        this.diagonalA = diagonalA;
        this.diagonalB = diagonalB;
        this.sisi = sisi;
    }
    Rhombus.prototype.luas = function () {
        return (this.diagonalA * this.diagonalB) / 2;
    };
    Rhombus.prototype.keliling = function () {
        return 4 * this.sisi;
    };
    return Rhombus;
}());
exports["default"] = Rhombus;
