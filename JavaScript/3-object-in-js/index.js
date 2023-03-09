/**
 Reference types - Kiểu dữ liệu tham chiếu
- Object : describe an object with many different properties

 Syntax: 
var a = {
    key : value
}
 */

var myDog = {
    name: 'lu',
    age: 1,
    weight: 2.3,
    isAlive: true
}


myDog.weight = 3 // change value

myDog['isAlive'] = false // change value

console.log(myDog); // show key:value

console.log(myDog.name); // show value

console.log(myDog['name']); // show value


