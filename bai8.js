//Câu 8: Sử dụng kiến thức đã học, hãy viết một hàm 
// cho phép copy một đối tượng sang một đối tượng mới
//  (không cop reference, không sử dụng JSON.stringify, JSON.parse,Object.assign(), 
// phải copy được cả các đối tượng con bên trong đối tượng đó);

const prompt = require('prompt-sync')();
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }

    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key]); 
        }
    }
    return newObj;
}

const originalObj = {
    name: "Luu Dung",
    age: 25,
    hobbies: ["reading", "coding"],
    address: {
        city: "Hanoi",
        country: "Vietnam"
    }
};

let copiedObj = deepCopy(originalObj);
console.log(copiedObj);
