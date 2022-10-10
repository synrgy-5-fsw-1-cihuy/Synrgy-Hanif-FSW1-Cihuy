// Function Declaration
// Cara 1
function reverseString() {
    console.log("Reverse String");
}

// Arrow Function
// ES6
// Cara 2
const checkString = (numOne, numTwo) => {
    console.log("Check String", numOne + numTwo);
}

// Calling methods/function
reverseString();
checkString(12, 4);
// console.log(checkString);

// let addition = (x, y) => {
//     console.log("Jumlah = ", x + y);
// }

// const operationMethod = () => {
//     const tipe = document.getElementById("tipe").value;
//     const numOne = document.getElementById("numOne").value;
//     const numTwo = document.getElementById("numTwo").value;
//     let hasil = calculate(tipe, numOne, numTwo);
//     alert(hasil);
//     alert(tipe);
//     alert(numOne);
//     alert(numTwo);
// }

// function calculateHandler() {
//     const tipe = document.getElementById("tipe").value;
//     let x = 10;
//     let y = 5;
//     let z = 0;
//     switch (tipe) {
//         case 1 :
//             z = x + y;
//             document.getElementById("demo").innerHTML = z;
//             break;
//         case 2 :
//             z = x - y;
//             document.getElementById("demo").innerHTML = z;
//             break;
//         case 3 :
//             z = x / y;
//             document.getElementById("demo").innerHTML = z;
//             break;
//         case 4 :
//             z = x * y;
//             document.getElementById("demo").innerHTML = z;
//             break;
//         case 5 :
//             z = x % y;
//             document.getElementById("demo").innerHTML = z;
//             break;        
//         default:
//             document.getElementById("demo").innerHTML = "Not Identified";
//             break;
//     }
// }




function calculate(tipe, x, y) {
    switch (tipe) {
        case 1 :
            console.log("Addition = ", x + y);
            break;
        case 2 :
            console.log("Substraction = ", x - y);
            break;
        case 3 :
            console.log("Division = ", x / y);
            break;
        case 4 :
            console.log("Multiplication = ", x * y);
            break;
        case 5 :
            console.log("Modulo = ", x % y);
            break;        
        default:
            console.log("Not identified");
            break;
    }
}

calculate(1, 10, 5);
calculate(2, 10, 5);
calculate(3, 10, 5);
calculate(4, 10, 5);
calculate(5, 10, 5);