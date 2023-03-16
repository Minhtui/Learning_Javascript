
console.log('----Example----')

var csv = require('csv')
var readlineSync = require('readline-sync')
var fs = require('fs') //read and write file system

var dataStudent = [] // create empty array save data 'dataStudent'


// read file system and save data into 'dataStudent'
function loadData() {
    var fileContent = fs.readFileSync('./data.json', {encoding: 'utf-8'}) // read file data.json
    dataStudent = JSON.parse(fileContent) // convert data string to object 
}

function showMenu() {
    console.log('1. show all list student');
    console.log('2. create a student');
    console.log('3. save and exit');

    var option = readlineSync.question('> select option: ')
    switch(option) {
        case '1' : showStudent()
                    showMenu()
                    break
        case '2' : createStudent()
                    showMenu()
                    break
        case '3' : saveAndExit()
                    break
        default  : console.log('wrong option!!!');
                    showMenu()
                    break
    }
}

//show all list student
function showStudent() { 
    for (var student of dataStudent) {
        console.log(student.name, '-', student.age);
    }
}

// create a student
function createStudent() {
    var name = readlineSync.question('Your name: ')
    var age = readlineSync.question('Your age: ')
    var student = {
        name: name,
        age: parseInt(age)
    }

    dataStudent.push(student) // get data student transfer to dataStudent
}

function saveAndExit() {
    var content = JSON.stringify(dataStudent)
    fs.writeFileSync('./data.json', content, {encoding: 'utf-8'})
}

function main() {
    loadData()
    showMenu()
}

main()



