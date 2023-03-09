// Creat a new Object, object literal
console.log('----Creat a new Object----')
var mouse = {
    weight: 0.2, // khai báo key: value
    getWeight: function() {
        return this.weight
    }
}

// console.log(mouse.getWeight());

// constructor function
function Mouse(color, weight) {
// this dùng trong method của object
 this.type = 'mouse'
 this.color = color // thuộc tính
 this.weight = weight
}

// thay đổi thuộc tính, khai báo bằng keyword new
var mouse1 = new Mouse('white', 0.2)
var mouse3 = new Mouse('black', 0.3)

var mouse2 = {type: 'mouse'}
console.log(mouse2); // in ra kiểu object

console.log(mouse1) // in ra kiểu là Mouse vì tạo được từ function Mouse
console.log(mouse3);

console.log('----Example----')
var cat = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse)
        return this
    }
}

var m1 = {name: 'm1'}
var m2 = {name: 'm2'}
var m3 = {name: 'm3'}

cat.eat(m1).eat(m2).eat(m3) //method chaining
console.log('Tom: ');
console.log(cat)

console.log('----Example2----')

var cat = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse)
        return this
    }
}

function Mouse(name) {
    this.name =  name
}
 
var mickey = new Mouse('mickey')
var jerry = new Mouse('jerry')

cat.eat(mickey).eat(jerry)
console.log('Tom: ');
console.log(cat);

console.log('----Exercise----');
/**
 *  Viết hàm xoá thuộc tính (prop) khỏi project student
 *  Trả về object đã được xoá
 *  Ex: 
 * removeProp('name') = {class: 'VI', rollno: 12}
*/

function removeProp(prop) {
    var student = {
        name: 'David Ravy',
        class: 'VI',
        rollno: 12
    }

    for (var key in student) { // lặp các key trong object student
        if (key == prop) { // nếu key == prop
            delete student[key]
        }
    }
    return student
}

console.log(removeProp('name'));

console.log('----Exercise2----');

/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @param {number}
 * Ex:
 * var student = {
    * name: 'jerry',
    * age: 14,
    * role: 'student'
 * }
 * lengthObj(student)
 */

function countProperty(obj) {
    var number = 0
    for (var key in obj) 
        number++
        return number
}
var student = {
    name: 'jerry',
    age: 14,
    role: 'student',
    gender: 'male'
}
console.log(countProperty(student));

console.log('----Exercise3----');

/**
 *  Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tinh sau
 * {
 *  color: String
 *  shape: String
 *  fill: boolean
 * }
 */

function Shape (color, shape, fill) {
    this.color = color
    this.shape = shape
    this.fill = fill
}

var shape1 = new Shape('red', 'rectangle', true)
var shape2 = new Shape('blue', 'triangle', false)

console.log(shape1)
console.log(shape2);


