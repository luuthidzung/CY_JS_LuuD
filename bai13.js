const prompt = require('prompt-sync')();
// Câu 13:
// Bạn cần kiểm tra xem một số nguyên x có phải là số palindrome hay không.
// Một số được gọi là palindrome nếu nó đọc xuôi cũng như đọc ngược đều giống nhau. '

//cách 1: sử dụng phương pháp chuỗi
function isPalindromeUsingString(num) {
    const str = num.toString();
    return str === str.split('').reverse().join(''); 
}
const number = 123456789;
console.log(`${number} ${isPalindromeUsingString(number)}`);


// cách 2: phương pháp số nguyên 
// function isPalindrome(num) {
//     if (num < 0) return false;
//     let reversed = 0;
//     let original = num;
//     while (num > 0) {
//         const digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num / 10); 
//     }
//     return original === reversed;
// }
// const number = 12321;
// console.log(`${number} là số palindrome: ${isPalindrome(number)}`);

// cách 3 :Đệ quy



// brute force