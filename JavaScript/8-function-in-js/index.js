/**FUNCTION 
 *- có thể tái sử dụng
 *- thực hiện các tác vụ xử lý logic trong chương trình
 * Syntax:
 *- định nghĩa Function
 function doSomething (input1, input2, ... ){
    //chức năng hoạt động của function
    return something;
 }
 *- gọi phương thức Function
 doSomething(input1, input2, ...)
 */
console.log('----Exercise: Tính diện tích hình tam giác----');
// 
function calculatorTriang(a, h) {
    return (a * h) /2;
 }
 calculatorTriang(10,5);

 console.log('----Exercise: Tính diện tích hình vuông----');
 // 
function calculatorSquare(a) {
    return a * a;
}
calculatorSquare(10)

console.log('----Exercise: Tính diện tích hình chữ nhật----');
 // 
function calculatorRectangular(a, b) {
    return a * b;
}
calculatorRectangular(5,5)

console.log('----Exercise: Tính chu vi hình tròn----');
 // 
 function calculatorCircle(r) {
    return (r * 2) * 3.14;
 }
calculatorCircle(5)