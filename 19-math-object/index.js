console.log('----Example: PI----');
// số PI
console.log(Math.PI)

console.log('----Example: ceil----');
// Làm tròn lên
console.log(Math.ceil(9.2))

console.log('----Example: floor----');
// làm tròn xuống
console.log(Math.floor(9.7))

console.log('----Example: max----');
// Trả về số lớn nhất
console.log(Math.max(1,2,6))

console.log('----Example: min----');
// Trả về số nhỏ nhất
console.log(Math.min(2,4,7,9))

console.log('----Example: random----');
// Trả về số ngẫu nhiên
// console.log('random : ', Math.random())
function coinRandom() {
  var random = Math.random()
  console.log(random)
  return random > 0.5
}

console.log('up : ', coinRandom())

console.log('----Exersice----');
// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup (arr){
  return arr.map(function (x){
    if (x % 2 === 0) {
      return Math.pow(x, 2) //luỹ thừa x mũ y
    }
    else return x
  })
}

console.log(powerup([0, 3, 6, 7, 4]))

console.log('----Exercise----');
// Dùng hàm average tính điểm trung bình 3 môn của một học sinh.

function average(arr) {
  var ave = arr.reduce(function (a, b) {
    return a + b
  })
  return Math.round(ave/arr.length)
}
console.log(average([8, 8 , 6.75]))

console.log('----Exercise----');
// Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương

function positiveNumber(arr) {
  return arr.map(function (a) {
    return Math.abs(a) // trả về giá trị tuyệt đối
  })
}
console.log(positiveNumber([-2, 3, -4, -7, 10]))

console.log('----Exercise----');
// Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

function random() {
  return Math.random() * 100
}

console.log(random() <= 100)

console.log('----Exercise----');
// Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác

function rightTriangle (a, b, c) {
  if ( a === 0 || b === 0 || c === 0) {
    return false
  }
  // 3 canh bang nhau
  if (a * a === b * b + c*c ||b * b === a * a + c*c ||c * c === b * b + a*a) {
    return true
  }
  else return false
}

console.log('----Exercise----');
// Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào

function trigonim (number) {
  var arr = []
  // toFixed giữ lại số thập phân
  arr.push(Math.sin(number).toFixed(3))
  arr.push(Math.cos(number).toFixed(3))
  arr.push(Math.tan(number).toFixed(3))
  return arr
}

console.log(trigonim(0))

console.log('----Exercise----');
// Tính chu vi và diện tích hình tròn

function circumferenceOfCircle(r) {
  return Math.PI*2*r
}
function acreageOfCircle(r) {
  return  Math.PI * Math.pow(r, 2)
}

console.log(circumferenceOfCircle(3))
console.log(acreageOfCircle(3))