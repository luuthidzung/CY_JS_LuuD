//Viết chương trình cho phép kiểm tra một địa chỉ email có hợp lệ hay không
    //Regrex
const prompt = require('prompt-sync')();
function isValidEmail(email) {    
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
let email = "123@example.com";
console.log(isValidEmail(email)); 

