// callback
// khi truyền một hàm vào một hàm khác như một tham số thì hàm được truyền vào được gọi là callback - gọi lại sau khi đã thực hiện xong
console.log('----Example----')

var coffeMachine = {
  // onfinish - tên hàm truyền vào
  makeCoffe: function (onfinish) {
    console.log('Making coffe ...')
    console.log('finish coffe ..')
    // return coffeMachine;
    onfinish(); // gọi hàm
  }
}
// console.log(coffeMachine)
// coffeMachine.makeCoffe()
// console.log(coffeMachine.makeCoffe())

// khai báo hàm biến beep
var beep = function () {
  console.log('rengreng')
}
// beep()

// truyền hàm biến beep
coffeMachine.makeCoffe(beep)

// Cách 2: truyền function trực tiếp
coffeMachine.makeCoffe(function () {
  console.log('tit tit')
})

console.log('----Exercise: Viết callback function để nhân đôi 1 số----');
/**
1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
Vd: double(2) === 4
2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
sau đó gọi callback function với tham số là kết quả tổng vừa tính
3. Nếu mảng trống trả về giá trị 0
Vd: sumAndDo([1, 2, 3], double) === 12
**/

function double (num) {
  return num * 2
}

function sumAndDo (nums, callback) {
  var sum = 0
  for (var i of nums)
    sum += i
  return callback(sum)
}

console.log(sumAndDo([1,2,3], double))

console.log('----Exercise: Viết callback function để biến đổi các giá trị có trong mảng----');
/**
1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
Nội dung của hàm bao gồm:
- Khai báo 1 biến result có giá trị là 1 empty array
- Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
được kết quả bao nhiêu thì push vào array khai báo ở trên
- Trả về result array
**/

function transform (numbers, callback) {
  arr = []
  for (var number of numbers) {
    arr.push(callback(number))
  }
  return arr
}

function double (num) {
  return num * 2
}

console.log(transform([21, 11, 5], double))

console.log('----Exercise----');
/**
 * 1. Viết hàm sayHello làm nhiệm vụ log ra màn hình 'I love Coders.Tokyo'
 * 2. Viết hàm countAndDo nhận vào tham số là 1 hàm. Hàm này log ra màn hình từ 1 đến 10 dùng vòng lặp for. Sau khi log xong, chạy hàm được truyền vào ở tham số
 * 3. Kiểm tra 2 hàm trên bằng cách: 
 *   countAndDo(sayHello)
 */

function sayHello() {
  console.log('I love Coders.Tokyo')
}

function countAndDo(callback) {
  for (var i = 1; i <= 10; i++) {
    console.log(i)
  }
  callback()
}

countAndDo(sayHello)