// JSON object: Javascript Object Notation: định dạng dữ liệu (chuỗi)
// 1. Stringify - convert an object to a JSON string
// 2. parse - Convert a JSON string to an object

console.log('----stringify----');
// Convert an object to a JSON string
var myDog = { name: 'milu', age: 1, dead: false}
var myDogString = JSON.stringify(myDog)
console.log(myDogString);

console.log('----parse----');
// Convert a JSON string to an object
var myCatString = '{"name": "tom", "age": 2, "dead": false}'
var myCat = JSON.parse(myCatString)
console.log(myCat.name);
console.log(myCat);

console.log('----Exercise----');
var obj = {name: 'codersX', age: 1}
var string = JSON.stringify(obj) // convert object to string
console.log('string: ' + string)

var object = JSON.parse(string) // convert string to object
console.log('object: ')
console.log(object)

console.log('----Exercis1----');
// 1. Show all students
// 2. Create a new student 
// 3. Save & Exit
// > 1.
// Save to /date.json -> fs.readFileSync, JSON.parse
//> 2.
//> Your name?
//> Your age?
//> Your class?
//> 3.

// getlibrary
var fs = require('fs')
var readlineSync = require('readline-sync')

var Data = [] // create array empty save data

while(true) {
    console.log('1. show all student')
    console.log('2. create a new student');
    console.log('3. save & exit');

    var options = readlineSync.question('what is your option? ') // create vảiable 'options' show question 
    if (options == 1) {
        var myStudent = fs.readFileSync('./myData.json', {encoding: 'utf-8'}) // read data to myData.json
        console.log(JSON.parse(myStudent)) // convert string to object
    }
    if (options == 2) {
        var myClassStudent = {} // create object empty save data

        myClassStudent.name = readlineSync.question('Name: ')
        myClassStudent.gender = readlineSync.question('Gender: ')
        myClassStudent.age = readlineSync.question('Age: ')
        myClassStudent.rank = readlineSync.question('Rank: ')

        Data.push(myClassStudent) // move data .myclassStudent to .Data
    }
    if (options == 3) {
        fs.writeFileSync('./myData.json', JSON.stringify(Data)) // convert object to string
        break
    }
}
