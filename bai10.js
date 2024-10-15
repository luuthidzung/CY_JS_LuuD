// Cho một chuỗi như sau “Tập đoàn Hyosung (Hàn Quốc) 
// dự kiến đầu tư thêm 4 tỷ USD, nâng tổng số vốn rót vào Việt Nam
// lên gấp đôi.
// Tại cuộc gặp Thủ tướng Phạm Minh Chính chiều 14/10, ông Cho Hyun-joon,
//  Chủ tịch Tập đoàn Hyosung (Hàn Quốc), khẳng định môi trường đầu tư 
//  của Việt Nam rất đáng tin cậy. Ông tin rằng Việt Nam sẽ trở thành 
//  trung tâm sản xuất của châu Á.”
//  Viết chương trình tìm từ có số ký tự lớn nhất và in ra màn hình 

function findLongestWord(str) {
    const words = str.replace(/[.,()]/g, '').split(/\s+/); 
    let longestWord = '';
    let maxLength = 0;
    for (let word of words) {
      if (word.length > maxLength) {
        maxLength = word.length;
        longestWord = word;
      }
    }
    return longestWord;
  }
  const input = `Tập đoàn Hyosung (Hàn Quốc) dự kiến đầu tư thêm 4 tỷ USD, nâng tổng số vốn rót vào Việt Nam lên gấp đôi.
  Tại cuộc gặp Thủ tướng Phạm Minh Chính chiều 14/10, ông Cho Hyun-joon, Chủ tịch Tập đoàn Hyosung (Hàn Quốc), 
  khẳng định môi trường đầu tư của Việt Nam rất đáng tin cậy. Ông tin rằng Việt Nam sẽ trở thành trung tâm sản xuất của châu Á.`;
  const longestWord = findLongestWord(input);
  console.log("Từ có số ký tự lớn nhất là:", longestWord);