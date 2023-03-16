// Prototype: khuôn mẫu  
 
// Create a new object
// var mouse = {
//     weight: 0.2,
//     getWeight: function() {
//         return this.weight
//     }
// }
// console.log(mouse)

// constructor function
function Mouse (name, color, weight) {
    this.type = 'mouse'
    this.name = name
    this.color = color
    this.weight = weight

    // nếu tạo method trong này thì nó không được chia sẻ
    // this.sleep = function() {
    //     console.log('sleeping...');
    // }
}

// lấy các thuộc tính đã được khai báo trên constructor function
var mickey = new Mouse('mickey', 'white', 20)
console.log(mickey.color);
console.log(mickey);

console.log(Mouse.prototype.constructor === Mouse) // true

// Prototype là một object được chia sẻ giữa tất cả các object được tạo 
// và sử dụng keyword new


//jerry có thể truy xuất được sleep
//sleep là 1 method của prototype  
//prototype được chia sẻ trong tất cả trong object mà được tạo ra bởi từ khoá new
//prototype là của Mouse
//jerry là object được tạo bởi constructor function Mouse
//các các thuộc tính và phương thức jerry có thể truy cập vào vì nó được chia sẽ
Mouse.prototype.sleep = function() {
    console.log(this.name + ' sleeping...')
}

var jerry = new Mouse('jerry', 'orange', 20)
console.log(jerry);

jerry.sleep()
mickey.sleep()

console.log(jerry.sleep === mickey.sleep)

console.log('----Exercise----')

/**
 *  Viết hàm xây dựng các đối tượng student gồm các thuộc tính
 * diemToan: Number
 * diemLy: Number
 * diemHoa: Number
 * average: [function]
 * 
 * average là hàm tính điểm trung bình 3 môn
 * average là thuộc tính dùng chung
 * 
 * Output:
 * student1.average() = 7
 * student2.average() = 8
 */

function Student(diemToan, diemLy, diemHoa) {
    this.diemToan = diemToan
    this.diemLy = diemLy
    this.diemHoa = diemHoa
}

Student.prototype.average = function() {
    return Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3)
}

var student1 = new Student(1,2,3)
var student2 = new Student(4,5,6)

console.log(student1.average())
console.log(student2.average());


