// Class Truk
// Attribute : color, type, transmission type
// Behaviour/perilaku : forward(), reverse(), loading(), undloading()

// Example class truk
class Truk {
    color;
    typeof;
    transmissionType;

    forward = () => {
        console.log("Forward");
    }
    reverse = () => {}
    loading = () => {}
    unloading = () => {}
}

// Example object Truk
// const trukDieselA = new Truk();
// trukDieselA.forward();


// menempatkan objek sekitar dalam programming
// Objek kursi, meja, kucing, dst
// Class => Blueprint dari objek
// Object => bentuk dari class
// 4 principle OOP
// Encapsulation => pembungkusan informasi dari objek
// Encapsulation => access modifier
// Public Access Modifier => Bisa dipakai di semua class
// Private Access Modifier => Hanya bisa digunakan pada class tsb
// Protected Access Modifier => Hanya bisa diakses class sendiri atau turunannya
// Default Access Modifier => Dianggap Public


// Class Parent
// Class Kucing
class Kucing {
    // Attribute
    nama; // Public
    #warna; // Private
    _umur; // Protected

    constructor(nama, warna, umur) {
        this.nama = nama;
        this.#warna = warna; //Private
        this._umur = umur;
    }

    // Property Accessor
    // Getter & Setter

    // Getter
    getWarna () { 
        return this.#warna;
    }

    get umur () {
        return this._umur;
    }

    // Setter
    setWarna(warna) { 
        this.#warna = warna;
    }

    set warna(warna) {
        this.#warna = warna;
    }

    // Polymorphism
    // setWarna(warnaA, warnaB) {
    //     this.#warna = warnaA + warnaB;
    // }

    // Behaviour
    sound = () => {
        console.log("meong");
    }

    walk = () => {
        console.log("halan halan");
    }
}

// Inheritance
// Class turunan
class AnakKucing extends Kucing {
    constructor(nama, warna, umur) {
        super(nama, warna, umur);
    }
}

const myCat = new Kucing("Kuroneko", "Black", 10);
const anakCat = new AnakKucing("Si Oren", "Oren", 5);
myCat.sound();
myCat.walk();
console.log(myCat.nama);
// console.log(myCat.warna);
// myCat.setWarna("White");
myCat.warna = "Mbangtelon";
console.log(myCat.getWarna());
// console.log(myCat._umur);
console.log(myCat.umur);

console.log(anakCat.nama)
console.log(anakCat.getWarna());
console.log(anakCat._umur);


