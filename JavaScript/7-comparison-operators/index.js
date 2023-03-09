// TOÁN TỬ SO SÁNH
/**
 * Comparison operators
 * > >= < <= === !==
 */
var a = '1000';
var b = '200';

console.log(a > b); //false
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 
//1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.
//=> Vì nó khai báo kiểu string là khai báo kiểu chuỗi, nên nó sẽ đếm lần 
//lượt và vì b có số đầu là 2 và a có số đầu là 1 nên b > a
// Để chứng minh luận điểm của mình đúng thì mình sẽ thay đổi giá trị 
//để so sánh 

var a = [1, 2];
var b = [1, 2];
console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 
//giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
//=> Khác biến truyền vào

var a = [];
var b = [];
var c = a;
 
console.log(a == b); // false
console.log(a === b); // false
console.log(a == c); // true
console.log(a === c); // true