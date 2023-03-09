var classes = [
    {
        id: 0, // indentifier
        name: '1A', 
        teacher: 0
    },
    {
        id: 1,
        name: '2B', 
        teacher: 1
    },
    {
        id: 2,
        name: '3C',
        teacher: 2
    },
    {
        id: 3,
        name: '4D',
        teacher: 3
    },
    {
        id: 4,
        name: '5E',
        teacher: 4
    }
]

var teachers = [
    {
        id: 0,
        name: 'Binh',
        age: 30
    },
    {
        id: 1,
        name: 'Loan',
        age: 39
    },
    {
        id: 2,
        name: 'Hanh',
        age: 40
    },
    {
        id: 3,
        name: 'Hien',
        age: 35
    },
    {
        id: 4,
        name: 'Chi',
        age: 40
    }
]

var students = [
    {id: 0, name: 'minh', height: 150, class: 0},
    {id: 1, name: 'thien', height: 160, class: 0},
    {id: 2, name: 'hanh', height: 170, class: 0},
    {id: 3, name: 'thinh', height: 165, class: 1}
]

// var class1A = classes.find(function(x) {
//     return x.name === '1A'
// })

// console.log(class1A.student.length);

function getStudentInClass (className) {
    var classObject = classes.find(function(x) {
        return x.name === className
    })

    var studentInClass = students.filter(function(student) {
        return student.class === classObject.id
    })

    return studentInClass
}

var studentInClass = getStudentInClass('2B')
console.log(studentInClass);

//Design database for a e-magazine website
//Design database for e-commerce

//table - npm
//Using node table to make the previous app look nice

//var {table }= require('table')

const person = {
    name: 'nhu',
    age: 22
}

const propertyNames = Object.entries(studentInClass)

console.log(propertyNames)
