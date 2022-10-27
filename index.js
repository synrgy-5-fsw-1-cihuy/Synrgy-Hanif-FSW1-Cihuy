// if
const ageSample = 29;

if(ageSample < 30) {
    console.info("Age too young");
} else if(ageSample == 30){
    console.info("Age fit");
} else {
    console.info("Age too old");
}

// switch case
switch (true) {
    case (ageSample < 30) :
        console.log("Age too young");
        break;

    case (ageSample==30):
        console.log("Age fit");    
        break;

    default:
        console.log("Age too old");
        break;
};

const parent = {
    name: "Andrew",
    address: "California",
    age: 30,
    postal_code: 55578
};

switch (true) {
    case parent.address == "California":
        console.log("United State of America");
        break;

    case parent.age > 35:
        console.log("Umurnya sudah bapak bapak");
        break;

    case parent.age < 35:
        console.log("Umurnya masih remaja");
        break;
        
    default:
        console.log("Bukan America");
        break;
}

if(parent.address == "California") {
    console.log("United State of America");
} else {
    console.log("Bukan America");
}

if(parent.age > 35) {
    console.log("Umurnya sudah bapak bapak");
} else {
    console.log("Umurnya masih remaja");
}

// Operator
// Assignment Operator
// Operator utk assign value ke variable

let styleRambut;
styleRambut = "Mohawk"; // Assignment Operator
console.log(styleRambut);

// Aritmatika operator
// Addition
let numberOne = 5;
let numberTwo = 6;
let result = numberOne + numberTwo;
console.log("Addition = " + result);
console.log(numberOne+=numberTwo);

// Substraction
let resultSubstract = numberOne - numberTwo;
console.log("Substraction = " + resultSubstract);

// Divide
let resultDivide = numberOne / numberTwo;
console.log("Divide = " + resultDivide);

// Multiply
let resultMultiply = numberOne * numberTwo;
console.log("Multiply = " + resultMultiply);

// Modulo
let resultModulo = numberOne % numberTwo;
console.log("Modulo = " + resultModulo);

// Increment & Decrement
console.log(++numberOne);
console.log(--numberOne);

// Comparison
// == === != !== <= >= ?(ternary)
if(numberOne <= 10) {
    console.log("lower");
} else {
    console.log("higher");
}

// Logical
// &&(and) ||(or) !(not)
const kota = "Jakarta";
if(kota == "Jakarta" || kota != ""){
    console.log("Kota di Indonesia");
} else {
    console.log("Bukan kota di Indonesia");
}

// Type Operator
// typeof instanceof
console.log(typeof kota);
console.log(typeof numberOne);
console.log(parent instanceof Array);
console.log(parent instanceof Object);

// Perulangan
// For loop
// for(let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// While loop
// let i =  0;
// while(i < 5) {
//     console.log(i);
//     i++;
// }

// Do while
// do {
//     console.log(i);
//     i++;
// } while(i < 5);


kembarLima = ["Ichika", "Nino", "Miku", "Yotsuba", "Itsuka"];

// Foreach loop
// kembarLima.forEach(value => {
//     console.log(value);
// });

// For of
for (let data of kembarLima) {
    console.log(data);
}