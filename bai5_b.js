const prompt = require('prompt-sync')();

function processString(str) {
   let cleanedStr = str.replace(/[@#!{}[\]()]/g, '');
    cleanedStr = cleanedStr.replace(/\s+/g, ' ').trim();
    return cleanedStr;
}

function calculateAverageFromString(processedString) {
    const words = processedString.split(' ');
    const numbers = words.filter(word => /^\d+$/.test(word)).map(Number);
    if (numbers.length === 0) {
        return 0;
    }
 
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = Math.round((sum / numbers.length) * 10) / 10;   
    return average;
}

function processAndCalculateAverage(input) {
    const processedString = processString(input);
    return calculateAverageFromString(processedString);
}

console.log(processAndCalculateAverage("")); 
console.log(processAndCalculateAverage("Xin chào  Cy")); 
console.log(processAndCalculateAverage("Xin chào 123456 @Cy")); 
console.log(processAndCalculateAverage(" Xin 20 c{h}ào 60  #Cy30@!Tech(VN)  130 ")); // 60
