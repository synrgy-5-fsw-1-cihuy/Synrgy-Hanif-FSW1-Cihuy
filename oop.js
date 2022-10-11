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

// Class Kucing
class Kucing {
    nama;
    warna;
    umur;

    constructor(nama, warna, umur) {
        this.nama = nama;
        this.warna = warna;
        this.umur = umur;
    }

    sound = () => {
        console.log("meong");
    }

    walk = () => {
        console.log("halan halan");
    }
}

const myCat = new Kucing("Kuroneko", "Black", 10);
myCat.sound();
myCat.walk();
// console.log(myCat.nama);
// console.log(myCat.warna);
// console.log(myCat.umur);