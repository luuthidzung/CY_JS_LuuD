// Câu 7: Cho mảng sau 
// const nestedArray = [1, [2, [3, [4, 5,6,7,8,9]]]];
// Hãy viết hàm biến đổi mảng trên thành một mảng 1 chiều như sau 
// [1,2,3,4,5,6,7,8,9,]
const prompt = require('prompt-sync')();

// cach 1: sử dụng flat
// const nestedArray =  [1, [2, [3, [4, 5,6,7,8,9]]]];
//     console.log(nestedArray.flat(Infinity));

// cach 2: sử dụng reduce
// function Flat(nestedArray = []) {
//     return nestedArray.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), [])
// }
// const nestedArray = [1, [2, [3, [4, 5,6,7,8,9]]]];
// Flat(arr);

// cach 3: sử dụng operator spread 

function flatten(nestedArray) {
  while (nestedArray.some((item) => Array.isArray(item))) {
    nestedArray = [].concat(...nestedArray)
  }
  return nestedArray
}

let nestedArray = [1, [2, [3, [4, 5,6,7,8,9]]]];
console.log(flatten(nestedArray))