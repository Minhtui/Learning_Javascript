/**
----Arithmetic Operators----
- Các phép toán số học trong lập trình
1. ++ -- (increment decrement)
2. * / %
3. + -
 */

console.log('----Example: ++ -- (increment decrement)----')

var a = 1
a++  //1 => cũng tăng nhưng trả về giá trị trước khi tăng
++a //2 => thay đổi giá trị a ngay tại lúc đấy và trả về giá trị tăng rồi

var a = 1
a--  //1 => cũng giảm nhưng trả về giá trị trước khi giảm
--a //2 => thay đổi giá trị a ngay tại lúc đấy và trả về giá trị giảm rồi

var a = 5
  a++ + ++a 
//5 + ++a //lúc này a = 6
//5 + 7 //tăng từ 6: ++a = 7
// 12

  a++ + ++a - --a + a--;
//5   + ++a - --a + a-- // a = 6
//5   + 7   - --a + a-- // a = 7
//5   + 7   - 6   + a-- // a = 6
//5   + 7   - 6   + 6  //  a = 5

var a = 5;
var b = 10;

  a++ * b-- + --a * ++b;
//5   * 10  + --a * ++b; //a = 6, b = 9
//5   * 10  +   5 * 10; //100

var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
      //10  + b++ - ++b - ++a;//a=9,b=19
      //10  + 18  - 20  - 10;//-2
console.log(x);

var a = 10;

var x = --a + a++;
       //9  + a++;//a=9
       //9  + 9//a=18
console.log(x);

console.log('----Example: * / % + - ----')

//Diện tích hình tam giác
/**
 * a: cạnh đáy của 1 hình tam giác
 * h: chiều cao của tam giác đó
 * Khai báo biến s bằng diện tích của hình tam giác
 */
var a = 20;
var h = 10;
var s = (a * h) / 2;
console.log(s);

console.log('----Exercise: Diện tích và chu vi hình chữ nhật----')
/**
 * width: chiều rộng của hình chữ nhật
 * height: chiều dài của hình chứ nhật
 */
var width = 10;
var height = 20;
var s = width * height;
var p = (width + height) * 2;
console.log(s, p);

console.log('----Exercise: Diện tích và chu vi hình tròn----');
/**
 * r: bán kính của 1 hình tròn
 * s: diện tích của hình tròn đó
 * pi: 3.14
 */
var r = 4;
var p = 3.14 * 2 * r;
var s = 3.14 * r * r;
console.log(p,s)