// Study case
// Ada sebuah array object dibawah ini
// Tampilkan nilai student yang terendah
// Tampilkan nilai student yang tertinggi
// Tampilkan sertifikat lulus bagi nilai diatas 50 di console

const studentScores = [
    {name: "Ganda", score: 90},
    {name: "Nadila", score: 80},
    {name: "Andre", score: 70},
    {name: "Andra", score: 60},
    {name: "Backbone", score: 50},
    {name: "Nuri", score: 65},
    {name: "Tariana", score: 50},
    {name: "Najwa", score: 76},
    {name: "Nanda", score: 99},
    {name: "Ben", score: 100},
    {name: "Rizky", score: 40},
    {name: "Bandana", score: 81},
    {name: "Rindho", score: 80},
    {name: "Finder", score: 90}
];

// Tampilkan sertifikat lulus bagi nilai diatas 50 di console
for(let i = 0; i < studentScores.length; i++) {
    if(studentScores[i]['score'] >= 50) {
        console.log(studentScores[i]['name'] + " " + studentScores[i]['score'] + " Lulus");
    } else {
        console.log(studentScores[i]['name'] + " " + studentScores[i]['score'] + " Tidak Lulus");
    }
}

// studentScores.forEach(data => {
//     for (let score in data) {
//         if(data[score] < 50) {
//             console.log(`tdk lulus ${score}: ${data[score]}`)
//         }
//     }
// })

// studentScores.forEach(data => {
//     for (let score in data) {
//         if(data[score] >= 50) {
//             console.log(`lulus ${score}: ${data[score]}`)
//         }
//     }
// })







// for(let data of studentScores) {
//     if(studentScores.score <= 50) {
//         console.log(studentScores.score);
//     }
// }

// studentScores.forEach(element => {
//     console.log(studentScores.score); 
// });



// for (const key in studentScores) {
//     console.log(key + studentScores[key]);
// }

// for (var key in studentScores) {
//     if (studentScores.hasOwnProperty(key)) {
//         console.log(`${key}: ${studentScores[key]}`);
//     }
// }

// studentScores.forEach(function (studentScores) {
//     var x = studentScores.prop1 + 2;
//     console.log(x);
// });

// const siswaLulus = studentScores.some(person => person.score >= 50);
// console.log(siswaLulus); 

