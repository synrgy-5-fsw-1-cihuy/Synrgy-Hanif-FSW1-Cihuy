"use strict";
exports.__esModule = true;
exports.Lingkaran = exports.Segitiga = exports.PersegiPanjang = void 0;
var Persegi = /** @class */ (function () {
    function Persegi(sisi) {
        this._sisi = 0;
        this._sisi = sisi;
    }
    Persegi.prototype.keliling = function () {
        return 4 * this._sisi;
    };
    Persegi.prototype.luas = function () {
        return this._sisi * this._sisi;
    };
    return Persegi;
}());
exports["default"] = Persegi;
var PersegiPanjang = /** @class */ (function () {
    function PersegiPanjang(panjang, lebar) {
        this._panjang = 0;
        this._lebar = 0;
        this._panjang = panjang;
        this._lebar = lebar;
    }
    PersegiPanjang.prototype.keliling = function () {
        return 2 * (this._panjang + this._lebar);
    };
    PersegiPanjang.prototype.luas = function () {
        return this._panjang * this._lebar;
    };
    return PersegiPanjang;
}());
exports.PersegiPanjang = PersegiPanjang;
var Segitiga = /** @class */ (function () {
    function Segitiga(alas, tinggi) {
        this._alas = 0;
        this._tinggi = 0;
        this._alas = alas;
        this._tinggi = tinggi;
    }
    Segitiga.prototype.keliling = function () {
        return (this._alas * this._tinggi) / 2;
    };
    Segitiga.prototype.luas = function () {
        return this._alas + this._tinggi + ((Math.pow(this._alas, 2)) + (Math.pow(this._tinggi, 2)));
    };
    return Segitiga;
}());
exports.Segitiga = Segitiga;
var Lingkaran = /** @class */ (function () {
    function Lingkaran(jarijari) {
        this._jarijari = 0;
        this._jarijari = jarijari;
    }
    Lingkaran.prototype.keliling = function () {
        return 2 * 3.14 * this._jarijari;
    };
    Lingkaran.prototype.luas = function () {
        return 3.14 * (Math.pow(this._jarijari, 2));
    };
    return Lingkaran;
}());
exports.Lingkaran = Lingkaran;
// Segitiga
console.log("=====Segitiga=====");
var segitigaA = new Segitiga(3, 4);
console.log(segitigaA.luas());
console.log(segitigaA.keliling());
// Lingkaran
console.log("=====Lingkaran=====");
var lingkaranA = new Lingkaran(5);
console.log(lingkaranA.luas());
console.log(lingkaranA.keliling());
// Persegi
console.log("=====Persegi=====");
var persegiA = new Persegi(5);
console.log(persegiA.luas());
console.log(persegiA.keliling());
// Persegi Panjang
console.log("=====Persegi Panjang=====");
var persegiPanjangA = new PersegiPanjang(2, 4);
console.log(persegiPanjangA.luas());
console.log(persegiPanjangA.keliling());
