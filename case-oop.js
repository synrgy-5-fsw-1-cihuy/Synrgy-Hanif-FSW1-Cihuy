// Class
class BangunDatar {

    sisi;

    constructor(sisi) {
        this.sisi = sisi;
    }

    get luas() {
        return this.sisi * this.sisi;
    }

    get keliling() {
        return 2 * (this.sisi+this.sisi);
    }
}

class Segitiga extends BangunDatar {
    constructor(sisi, tinggi, sisiMiring) {
        super(sisi); // dianggap alas
        this.tinggi = tinggi;
        this.sisiMiring = sisiMiring;
    }

    get luas() {
        return (this.sisi*this.tinggi) / 2;
    }

    get keliling() {
        return this.sisi + this.tinggi + this.sisiMiring; // Males settingnya
    }
}

class Lingkaran extends BangunDatar {
    constructor(sisi) {
        super(sisi); // dianggap radius
    }

    get luas() {
        return 3.14 * (this.sisi**2);
    }

    get keliling() {
        return 2 * 3.14 * this.sisi;
    }
}

class Persegi extends BangunDatar {
    constructor(sisi) {
        super(sisi);
    }
}

class PersegiPanjang extends BangunDatar {
    constructor(sisi, lebar) {
        super(sisi);
        this.lebar = lebar;
    }

    get luas() {
        return this.sisi * this.lebar;
    }

    get keliling() {
        return 2 * (this.sisi+this.lebar);
    }
}


// Segitiga
console.log("=====Segitiga=====");
const segitigaA = new Segitiga(3, 4, 5);
console.log(segitigaA.sisi);
console.log(segitigaA.luas);
console.log(segitigaA.keliling);

// Lingkaran
console.log("=====Lingkaran=====");
const lingkaranA = new Lingkaran(5);
console.log(lingkaranA.sisi);
console.log(lingkaranA.luas);
console.log(lingkaranA.keliling);

// Persegi
console.log("=====Persegi=====");
const persegiA = new Persegi(5);
console.log(persegiA.sisi);
console.log(persegiA.luas);
console.log(persegiA.keliling);

// Persegi Panjang
console.log("=====Persegi Panjang=====");
const persegiPanjangA = new PersegiPanjang(2, 4);
console.log(persegiPanjangA.sisi);
console.log(persegiPanjangA.luas);
console.log(persegiPanjangA.keliling);