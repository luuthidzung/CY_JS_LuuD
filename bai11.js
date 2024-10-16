// Câu 11:
// Cho một số nguyên n, hãy trả về một hàm đếm. 
// Hàm đếm này ban đầu sẽ trả về n và sau đó trả về giá trị lớn hơn giá trị trước đó 1 đơn vị mỗi lần được gọi tiếp theo 
// (n, n + 1, n + 2, v.v.).
//=> sử dụng closure
// tạo count+1 -> tạo counter -> tạo arr counter ->

function createCounter(n) {
    let count = n;
    return function() {
      return count++;
    };
  }
  
  function countArray(n, array) {
    const counter = createCounter(n);
    const result = [counter()];
    for (let i = 0; i < array.length; i++) {
      result.push(counter());
    }
    return result;
  }
  
  const n = 15;
  const array = ["arr", "arr", "arr", "arr", "arr"];
  const output = countArray(n, array);
  console.log(output);