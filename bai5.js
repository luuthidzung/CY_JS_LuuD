const prompt = require('prompt-sync')();

function processString(str) {
    // Bước 1: Loại bỏ các ký tự đặc biệt
    let cleanedStr = str.replace(/[@#!{}[\]()]/g, '');

    // Bước 2: Loại bỏ dấu cách liên tiếp và dấu cách ở đầu và cuối
    cleanedStr = cleanedStr.replace(/\s+/g, ' ').trim();

    return cleanedStr;
}


function createWordArray(processedString) {
    if (processedString === "") {
        return [];
    }
    
    return processedString
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .reverse();
}
function processStringToWordArray(input) {
    const processedString = processString(input);
    return createWordArray(processedString);
}

console.log(processStringToWordArray("")); 
console.log(processStringToWordArray("Xin chào Cy")); 
console.log(processStringToWordArray("Xin chào @CYer")); 
console.log(processStringToWordArray(" Xin c{h}ào #Tech@!Cy(VN) "));  
