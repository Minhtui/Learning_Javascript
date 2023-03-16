//npm - node package manager
var readLileSync = require('readline-sync')

// var useName = readLileSync.question('May I have your name?')
// console.log('hi ' + useName + '!')

// var languages = []
// var language = readLileSync.question('what is your mother language?')
// languages.push(language)

// console.log(languages)

var pet = {}

var name = readLileSync.question('your pet name: ')
var gender = readLileSync.question('pet gender (male/female): ')
var weight = readLileSync.question('weight: ')

pet.name = name
pet.gender = gender
pet.weight = parseInt(weight)

console.log(pet)