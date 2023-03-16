/**
Các method trong array
- toString() : chuyển một mảng về dạng chuỗi ký tự

- length : trả về số lượng phần tử

- concat() : nối 2 mảng lại với nhau

- push() : cho phần tử mới vào trong mảng và cho vào vị trí cuối cùng

- pop() : lấy ra vị trí cuối cùng và thay đổi mảng

- shift() : đẩy phần tử phần tử đầu tiên ra khỏi mảng và thay đổi mảng

- unshift() : cho một phần tử vào đầu mảng

- slice() : trích xuất một phần của mảng ban đầu rồi trả về mảng mới

- splice() : thêm hoặc xoá một hoặc nhiều phần tử ở vị trí bất kỳ trong mảng

- find() : tìm kiếm, chạy qua lần lượt các phẩn tử trong mảng cho đến khi điều kiện true thì dừng lại và trả về phần tử đó thông qua function

- filter() : lọc qua các phần tử thoả mãn và trả về các phần tử đó thông qua function

- sort() : sắp xếp các phần tử trong mảng, thay đổi vị trí trong mảng và trả về chính mảng đó, sắp xếp các phần tử trong mảng theo thứ tự tăng dần

- map() : chuyển đổi tập hợp các phần tử có trong mảng thành các phần tử mới thông qua function

- reduce() : nhận 2 tham số đầu vào, thực thi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích luỹ để thu về giá trị duy nhất

- join() : nối các phần tử của mảng thành một chuỗi, các phần tử được ngăn nhau bởi kí tự do người dùng quy định, nếu không truyền ký tự ngăn cách thì giá trị mặc định là dấu phẩy ","

- forEach() :
**/

console.log('----Example: conact----');
// trả về 2 mảng nối nhau, và không làm thay đổi 2 mảng chỉ tạo mảng mới

var a = [1, 3, 2]
var b = [10, 20]
// a.concat(b)
console.log(a.concat(b))
console.log(b.concat(a))
console.log('Lưu mảng mới vào biến mới')
var c = a.concat(b).concat(a).concat(b)
console.log(c)

console.log('----Example: push----');

var a = [1, 3, 2]
var b = [10, 20]
var c = 5
// a.push(c)
// trả về độ dài của mảng mới
console.log(a.push(c))
// thay đổi a
console.log(a)


console.log('----Example: pop----');

var a = [1, 3, 2]
var b = [10, 20]
// lấy ra vị trí cuối cùng, và trả về phần tử bị lấy ra
console.log(a.pop())
// và thay đổi mảng
console.log(a)

console.log('----Exercise: Viết chương trình xoá đi n phần tử cuối cùng----');
function removeEnd (arr, n) {
  for (var i = 0; i < n; i++) {
    arr.pop()
  }
  return arr
}

console.log(removeEnd([1,2,3,4,5,6,7,8], 4))

console.log('----Example: shift----');
// lấy vị trí đầu tiên ra khỏi mảng và thay đổi mảng

var a = [1, 3, 2]
var b = [10, 20]
// lấy phần tử đầu ra và trả về phần tử bị lấy ra
console.log(a.shift())
// và thay đổi mảng
console.log(a)

console.log('----Example: unshift----');
// cho phần tử vào vị trí đầu mảng, thay đổi độ dài mảng, trả về độ dài mới của mảng

var a = [1, 3, 2]
var b = [10, 20]
// thay đổi dộ dài mảng
console.log(a.unshift(5))
// cho phần tử vào vị trí đầu mảng
console.log(a)

console.log('----Example: length, toString()----');

var a = [1, 3, 2]
var b = [10, 20]
// trả về độ dài mảng
console.log(a.length)
// chuyển một mảng về dạng chuỗi ký tự
console.log(a.toString())

console.log('----Example: map----');
// biến đổi tập hợp các phần tử trong mảng thành các phần tử mới thông qua function

console.log('----Exercise: Bình phương 1 số----');
var numbers = [1,2,3,4]
var squareNumbers = numbers.map(function (x) {
  return x*x
})
console.log(squareNumbers)

console.log('----Exercise: Diện tích hình chữ nhật----');
var rectangles = [
  {width: 10, height: 5},
  {width: 10, height: 20},
  {width: 4, height: 16}
]

var areaRectangles = rectangles.map(function (a) {
  console.log(a)
  return a.width*a.height
})
console.log(areaRectangles)

console.log('----Example: filter----');
// bộ lọc, lọc qua các phần tử thoả mãn thông qua function

console.log('----Exercise: Chọn số chẵn----');
var numbers = [1, 2, 3 ,4]
var eveNumbers = numbers.filter(function(x) {
  return x % 2 === 0;
})
console.log(eveNumbers)

console.log('----Exercise: Chọn số dương----');
var numbers = [-1, -2, -3, 0, 1, 2]
var plusNumbers = numbers.filter(function (x) {
  return x >= 0
})
console.log(plusNumbers)

console.log('----Example: find----');
// tìm kiếm, chạy qua lần lượt các phần tử trong mảng đến khi thoả mãn điều kiện true thì dừng lại và trả về phần tử đó thông qua function

console.log('----Exercise: Tìm số chia hết cho 2----');
var numbers = [1,2,3,4]
var evenNumbers = numbers.find(function (x) {
  return x%2===0
})
console.log(evenNumbers)

console.log('----Example: sort----');
// sắp xếp các phần tử trong mảng, thay đổi vị trí trong mảng và trả về chính mảng đó, sắp xếp các phần tử trong mảng theo thứ tự tăng dần

var numbers = [-4, 0, 6 , 1, 2]
// sắp xếp mảng theo thứ tự tăng dần
numbers.sort()
console.log(numbers)

console.log('----Example: reduce----');
// nhận 2 tham số đầu vào, thực thi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích luỹ để thu về giá trị duy nhất

var numbers = [1,2,3,4]
var evenNumbers = numbers.reduce(function(a, b) {
  console.log(a, b)
  return a+b
})
console.log(evenNumbers)

console.log('----Exercise: Dùng map() và reduce() tính tổng đơn hàng----');
var products = [
  {name: 'jean', quantity: 2, unitPrice: 100},
  {name: 'somi', quantity: 1, unitPrice: 200},
  {name: 'jacket', quantity: 3, unitPrice: 300}
]

// dùng map() để nhân phần tử quantity với unitPrice với nhau để tạo ra thành phần mới
var carts = products.map(function(x) {
  return x.quantity * x.unitPrice
})
console.log(carts)
// dùng reduce() để cộng dồn các giá trị và trả về giá trị duy nhất
var total = carts.reduce(function(a, b) {
  console.log(a, b)
  return a + b
})
console.log(total)

console.log('--------------------------')
console.log('Dùng reduce tính tổng đơn hàng')
var products = [
  {name: 'jean', quantity: 2, unitPrice: 100},
  {name: 'somi', quantity: 1, unitPrice: 200},
  {name: 'jacket', quantity: 3, unitPrice: 300}
]
var total = products.reduce(function(currentTotal, product) {
  console.log(currentTotal, product)
  return currentTotal + product.quantity * product.unitPrice;
}, 0)
console.log(total)
/**
loop1: currentTotal = 0, product = products[0]
        0 + 2 * 100 = 200
loop2: currentTotal = 200, product = products[1]
        200 + 1 * 200 = 400
loop3: currentTotal = 400, product = products[2]
        400 + 3 * 300 = 13000
**/

console.log('----Exercise: nối chuỗi----');

console.log('Sử dụng reduce()')
// trả về kết quả '<tam><bill><kim>'
var items = ['tam', 'bill', 'kim']
var reduceItems = items.reduce(function(a, b) {
  console.log(a, b)
  return a += '<'+b+'>'
})
console.log(reduceItems)
/**
loop1: a = '', b = tam
'' + <tam> = <tam>
loop2: a = <tam>, b = bill
<tam> + <bill> = <tam><bill>
loop3: a = <tam><bill>, b = kim
<tam><bill><kim>
**/

console.log('Sử dụng map() và join()')
// trả về kết quả '<tam><bill><kim>'
var mapItems = items.map(function(x) {
  return '<'+x+'>'
})
console.log(mapItems.join(''))

console.log('----Example: join----');
// nối các phần tử của mảng thành một chuỗi, các phần tử được ngăn nhau bởi kí tự do người dùng quy định

var a = ['wind', 'water', 'fire']
console.log(a.join()) //'Wind,Water,Fire'
console.log(a.join(', ')) //'Wind, Water, Fire'
console.log(a.join(' + ')) //'Wind + Water + Fire'
console.log(a.join('')) //'WindWaterFire'


