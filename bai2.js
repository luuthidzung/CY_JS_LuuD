const prompt = require('prompt-sync')();
//cach 3: su dung ham so sanh comparator
function bubbleSort(arr, comparator) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
const arr = [10, 2, 3, 2, 5];
console.log("Mảng ban đầu:", arr);
console.log("Sắp xếp tăng dần:", bubbleSort([...arr], (a, b) => a - b));
console.log("Sắp xếp giảm dần:", bubbleSort([...arr], (a, b) => b - a));

//cach 1 : su dung ascending va descending
// function bubbleSortAscending(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// function bubbleSortDescending(arr) {
//     const n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// const arr = [10, 2, 3, 2, 5];
// console.log("Mảng ban đầu:", arr);
// console.log("Sắp xếp tăng dần:", bubbleSortAscending([...arr]));
// console.log("Sắp xếp giảm dần:", bubbleSortDescending([...arr]));


//cach 2: dung ascending , if ascending= false -> descending
// function bubbleSort(arr,isAscending){
//     const n=arr.length;
// }
// or (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (isAscending ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//     }
// }
// return arr;
// }

// const arr = [10, 2, 3, 2, 5];
// console.log("Mảng ban đầu:", arr);
// console.log("Sắp xếp tăng dần:", bubbleSort([...arr]));
// console.log("Sắp xếp giảm dần:", bubbleSort([...arr], false));

