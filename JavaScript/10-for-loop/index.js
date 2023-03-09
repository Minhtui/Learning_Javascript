
/**
 * syntax: 
for (1.init;2.condition;4.final-expression){
 3.statements;
}
1.Biểu thức khởi tạo
2.Biển thức điều kiện
3.Câu lệnh thực hiện
4.Biểu thức chạy cuối cùng 
**/

console.log('----Example----');
for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log('----Example----');
for (var i = 9; i >=0; i--) {
  console.log(i)
}

console.log('----Example----');
var studentClass =[
  {name: 'nhu', point: 8},
  {name: 'thinh', point: 7},
  {name: 'tam', point: 8}
]
// console.log(studentClass[0].name);
for (var i = 0; i < 3; i++){
  console.log(studentClass[i].name, studentClass[i].point)
}

console.log('----Exercise: Kiểm tra số nguyên tố----');
// b1: Nhập n 
// b2: Kiểm tra nếu n < 2 thì n không phải số nguyên tố
// b3: lặp từ 2 đến (n-1), nếu trong khoảng này tồn tại số mà n chia hết thì n không phải số nguyên tố, ngược lại n là số nguyên tố
 
function isPrimeNumber(x) {
  if (x < 2)
    return false
  for (var i = 2; i <= (x-1); i++) {
    if (x % i === 0)
      return false;
  }
  return true
}
console.log(isPrimeNumber(2))

console.log('----Exercise: Hiển thị bảng chữ cái----');
function fromCharCode() {
    //Khai báo chuỗi rỗng để cộng dồn kết quả
  var str = ""
  for (var i = 97; i <= 122; i++) {
    // console.log(String.fromCharCode(i))
    str += String.fromCharCode(i)
  }
  return str
}
console.log(fromCharCode())

console.log('----Exercise: Dùng vòng lặp for tính tổng các số trong mảng----');
function sum (array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sum([2,3,5,6]))

console.log('----Exercise: Tính tổng của tích của các phần tử của array a với các phần tử array b----');
function sumMultiplyArray(a, b) {
  var sumMultiplyArray = 0;
  for (var i = 0; i < a.length; i++) {
    // sum += a[i]
    for (var j = 0; j < b.length; j++) {
      sumMultiplyArray += a[i]*b[j]
    }
  }
  return sumMultiplyArray;
}
console.log(sumMultiplyArray([1, 2, 3], [10, 20]))

console.log('----Exercise: Hàm calculate trả về tích các số từ start đến end, không tính end----');
// calculate(2,5) trả về kết quả 24 vì  (2 * 3 * 4 = 24)
function calculate(start, end) {
  var multiply = 1;
  for (var i = start; i < end; i++) {
    multiply *= i;
  }
  return multiply
}
console.log(calculate(2,5))

console.log('----Exercise: Sử dụng vòng lặp for để tính tích của các phần tử của array a với các phần tử của array b----');
var a = [1, 2, 3, 4, 5];
var b = [10, 20, 30];
/**
 * Kết quả mong muốn:
 * 10
 * 20
 * 30
 * ...
 * 20
 * 40
 * 60
 * ...
 * Gợi ý: Dùng nested for loops (các vòng lặp lồng nhau)
 */
for(var i=0;i<a.length;i++){
  for(var j = 0 ; j<b.length;j++){
    console.log(a[i]*b[j])
  }
}

console.log('----Exercise: Viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay khôn----');
/**
Tham số:
- array: mảng cần kiểm tra
- value: giá trị cần kiểm tra xem có tồn tại trong array không
return:
- true: nếu có tồn tại
- false: nếu không tồn tại
**/
function has (array, value) {
  var has;
  for (var i = 0; i <= array.length; i++) {
    has = array.includes(value)
  }
  return has
}
console.log(has([5, 2, 4, 8, 4], 4))

console.log('----Exercise: Tính giai thừa của một số nguyên----');
function factory (number) {
  var fac = 1;
  for (var i = number; i >= 1; i--) {
    fac *= i;
  }
  return fac
}
console.log(factory(5))
