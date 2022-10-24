"use strict";
exports.__esModule = true;
var Dog = /** @class */ (function () {
    function Dog(name, color) {
        this.name = "";
        this.color = "";
        this.name = name;
        this.color = color;
    }
    Dog.prototype.getName = function () {
        return this.name;
    };
    Dog.prototype.setName = function (name) {
        this.name = name;
    };
    Dog.prototype.getColor = function () {
        return this.color;
    };
    Dog.prototype.setColor = function (color) {
        this.color = color;
    };
    return Dog;
}());
exports["default"] = Dog;
