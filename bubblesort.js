const scores = [5, 4, 3, 2, 1, 6, 7, 8];
const alphabet = ['c', 'b', 'd', 'h', 'a', 'f', 'g', 'e'];

// Bubblesort ASC
// for(let i = 0; i < scores.length; i++) {
//     for(let j = 0; j < scores.length; j++) {
//         if(scores[j] > scores[j + 1]) {
//             let tmp = scores[j];
//             scores[j] = scores[j + 1];
//             scores[j + 1] = tmp;
//         }
//     }
// }


// Bubblesort DESC
// for(let i = 0; i < scores.length; i++) {
//     for(let j = 0; j < scores.length; j++) {
//         if(scores[j] > scores[j - 1]) {
//             let tmp = scores[j];
//             scores[j] = scores[j - 1];
//             scores[j - 1] = tmp;
//         }
//     }
// }

for(let i = 0; i < scores.length; i++) {
    for(let j = 0; j < scores.length; j++) {
        if(scores[j] < scores[j + 1]) {
            let tmp = scores[j];
            scores[j] = scores[j + 1];
            scores[j + 1] = tmp;
        }
    }
}

console.log(scores);