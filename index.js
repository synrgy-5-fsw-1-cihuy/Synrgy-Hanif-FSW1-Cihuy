// Module bawaan node
const os = require('os');
const fs = require('fs');

// console.log("hello");
// console.log(os.freemem());
// console.log(os.hostname());

// Nulis string dan generate file
// fs.writeFileSync('./test.txt', 'yahoo');

// const result = fs.readFileSync('./test.txt', 'utf-8');
// console.log(result);

// --------------------------------
// fs.writeFileSync('./task1.txt', 'lorem ipsum dolor sit amet');
fs.writeFileSync('./task1.txt', 'ZA WARUDO! TOKI WO TOMARE!');
const hasil = fs.readFileSync('./task1.txt', 'utf-8');
console.log(hasil);

