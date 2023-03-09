/**
----Data types----
Primitive types - Kiểu dữ liệu nguyên thuỷ
- Number 
- String 
- Boolean (true/false)
Special types - Kiểu dữ liệu đặt biệt
- undefined
- null

 */

console.log('----Number----')
var a1 = -100
var a2 = 0.5

console.log(typeof a1 + ':', a1);
console.log(typeof a2 + ':', a2);

console.log('----String----')
var str = 'Hello world!!!'

console.log(typeof str + ':', str)

console.log('----Boolean----')
var isHidden = true 

console.log(typeof isHidden + ':', isHidden);

console.log('----undefined----')
// Khai báo nhưng chưa gán giá trị 
var a 
a = 100 // var a = 100

console.log('----null----');
// là giá trị rỗng
a = null
console.log(typeof a + ':', a);