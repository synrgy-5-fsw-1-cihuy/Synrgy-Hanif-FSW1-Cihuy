"use strict";
exports.__esModule = true;
var Rectangle = /** @class */ (function () {
    function Rectangle(panjang, lebar) {
        this.panjang = 0;
        this.lebar = 0;
        this.panjang = panjang;
        this.lebar = lebar;
    }
    Rectangle.prototype.luas = function () {
        return this.panjang * this.lebar;
    };
    Rectangle.prototype.keliling = function () {
        return 2 * (this.panjang + this.lebar);
    };
    return Rectangle;
}());
exports["default"] = Rectangle;
