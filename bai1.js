const prompt = require('prompt-sync')();
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function isPerfect(num) {
    if (num <= 1) return false; 
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i; 
        }
    }
    return sum === num; 
}

const number = parseInt(prompt("Nhập vào một số bất kỳ:"));

if (isPrime(number)) {
    console.log(`${number} là số nguyên tố.`);
     } else {
    console.log(`${number} không phải là số nguyên tố.`);
     }

if (isPerfect(number)) {
    console.log(`${number} là số hoàn hảo.`);
     } else {
    console.log(`${number} không phải là số hoàn hảo.`);
     }
