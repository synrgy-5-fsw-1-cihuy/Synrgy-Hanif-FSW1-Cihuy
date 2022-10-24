"use strict";
exports.__esModule = true;
var Parallegram = /** @class */ (function () {
    function Parallegram(alas, tinggi, sisiMiring) {
        this.alas = 0;
        this.tinggi = 0;
        this.sisiMiring = 0;
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisiMiring = sisiMiring;
    }
    Parallegram.prototype.luas = function () {
        return (this.alas * this.tinggi);
    };
    Parallegram.prototype.keliling = function () {
        return 2 * (this.alas + this.sisiMiring);
    };
    return Parallegram;
}());
exports["default"] = Parallegram;
