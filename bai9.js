// const matrix = [
//     [1,2,3],
//     [4,5,6], 
//     [9,10,11]
//  ]
//  return
//  [
//      [9,4,1],
//      [10,5,2],
//      [11,6,3]
//  ]
 const prompt = require('prompt-sync')();


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 10, 11]
//   ];
// function rotateMatrix(matrix) {
//     const n = matrix.length;
//     const result = new Array(n).fill().map(() => new Array(n));
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         result[i][j] = matrix[j][n - 1 - i];
//       }
//     }
    
//     return result;
//   }
//   const rotatedMatrix = rotateMatrix(matrix);
//   console.log(rotatedMatrix);

function rotateMatrix(matrix) {
    const n = matrix.length;
    const result = new Array(n).fill().map(() => new Array(n));
    
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        result[i][j] = matrix[2-j][i];
      }
    }
    
    return result;
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 10, 11]
  ];
  
  const rotatedMatrix = rotateMatrix(matrix);

  console.log(rotatedMatrix);