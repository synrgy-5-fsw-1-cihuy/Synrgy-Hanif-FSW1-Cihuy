interface BangunDatar {
    luas(): number;
    keliling(): number;
}

export default class Persegi implements BangunDatar {
    
    _sisi: number = 0;
    
    constructor(sisi: number) {
        this._sisi = sisi;
    }
      
    keliling(): number {
        return 4 * this._sisi;
    }
    
    luas(): number {
        return this._sisi * this._sisi;
    }
}

export class PersegiPanjang implements BangunDatar {

    _panjang: number = 0;
    _lebar: number = 0;

    constructor(panjang, lebar) {
        this._panjang = panjang;
        this._lebar = lebar;
    }

    keliling(): number {
        return 2 * (this._panjang + this._lebar);
    }

    luas(): number {
        return this._panjang * this._lebar;
    }
}

export class Segitiga implements BangunDatar {
    
    _alas: number = 0;
    _tinggi: number = 0;

    constructor(alas, tinggi) {
        this._alas = alas;
        this._tinggi = tinggi;
    }

    keliling(): number {
        return (this._alas * this._tinggi) / 2;
    }

    luas(): number {
        return this._alas + this._tinggi + ((this._alas**2) + (this._tinggi**2));
    }
}

export class Lingkaran implements BangunDatar {
    
    _jarijari: number = 0;

    constructor(jarijari) {
        this._jarijari = jarijari;
    }

    keliling(): number {
        return 2 * 3.14 * this._jarijari;    
    }

    luas(): number {
        return 3.14 * (this._jarijari**2);
    }
}

// Segitiga
console.log("=====Segitiga=====");
const segitigaA = new Segitiga(3, 4);
console.log(segitigaA.luas());
console.log(segitigaA.keliling());

// Lingkaran
console.log("=====Lingkaran=====");
const lingkaranA = new Lingkaran(5);
console.log(lingkaranA.luas());
console.log(lingkaranA.keliling());

// Persegi
console.log("=====Persegi=====");
const persegiA = new Persegi(5);
console.log(persegiA.luas());
console.log(persegiA.keliling());

// Persegi Panjang
console.log("=====Persegi Panjang=====");
const persegiPanjangA = new PersegiPanjang(2, 4);
console.log(persegiPanjangA.luas());
console.log(persegiPanjangA.keliling());