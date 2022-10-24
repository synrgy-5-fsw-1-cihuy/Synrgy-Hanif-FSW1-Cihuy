"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(jarijari) {
        this.jarijari = 0;
        this.jarijari = jarijari;
    }
    Circle.prototype.luas = function () {
        return 2 * 3.14 * this.jarijari;
    };
    Circle.prototype.keliling = function () {
        return 3.14 * (Math.pow(this.jarijari, 2));
    };
    return Circle;
}());
exports["default"] = Circle;
