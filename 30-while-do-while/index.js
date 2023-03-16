//while, do ...while loops
/**
 * syntax
 * while (condition) {
 * //do something
 * }
 */

// Even if the condition is fasle, try run 1 time 

console.log('----Example----')
var i = 0
var isSuccess = false

do {
    i++
    console.log('Enter card '+i)

    if (false) {
        isSuccess = true
    }
} while (!isSuccess && i < 3) // try 3 times if false then break 

console.log('----Example1----')
var i = 1
while (i <= 5) {
    console.log(i);
    ++i
}

console.log('xxx', i);

/**
 * syntax:
 * do {
 *  //do something // chạy ít nhất 1 lần
 * } while(condition)
 */

console.log('----Example2----')
do {
    console.log(i);
    ++i
} while (i <= 10)

console.log('----Example3----');

var readlineSync = require('readline-sync')

var students = []

do {
    console.log('1. Display list of students');
    console.log('2. Create a new student');
    console.log('3. Exit')
    var choose = readlineSync.question('Your choose: ')
    var chooses = parseInt(choose)
    switch (chooses) {
        case 1:
            console.log(students);
            break
        case 2:
            var newStudent = {}

            newStudent.name = readlineSync.question('Name: ')
            newStudent.age = readlineSync.question('Age: ')
            newStudent.gender = readlineSync.question('Gender: ')

            students.push(newStudent)
            break
        case 3:
            chooses = 0
        default:
            break
    }
} while (chooses > 0 && chooses < 4) 
