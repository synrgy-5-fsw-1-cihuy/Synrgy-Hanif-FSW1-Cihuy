"use strict";
exports.__esModule = true;
var Square = /** @class */ (function () {
    function Square(sisi) {
        this.sisi = 0;
        this.sisi = sisi;
    }
    Square.prototype.luas = function () {
        return this.sisi * this.sisi;
    };
    Square.prototype.keliling = function () {
        return 4 * this.sisi;
    };
    Square.prototype.getSisi = function () {
        return this.sisi;
    };
    Square.prototype.setSisi = function (sisi) {
        this.sisi = sisi;
    };
    return Square;
}());
exports["default"] = Square;
