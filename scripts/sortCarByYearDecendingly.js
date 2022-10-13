function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // for(let i = 0; i < result.length; i++) {
  //   for(let j = 0; j < result.length - i - 1; j++) {
  //     if(result[j].year < result[j + 1].year) {
  //       let tmp = result[j];
  //       result[j] = result[j + 1];
  //       result[j + 1] = tmp;
  //     }
  //   }
  // }

  let swapped;
  do {
    swapped = false;

    for(let i = 0; i < result.length - 1; i++) {
      if(result[i].year < result[i + 1].year) {
        [result[i], result[i + 1]] = [result[i + 1], result[i]];
        swapped = true;
      }
    }
  } while(swapped)

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
