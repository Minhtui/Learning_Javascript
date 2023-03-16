var fs = require('fs')

// đọc ra file
var text = fs.readFileSync('./song.txt', {encoding: 'utf8'})
var text1 = fs.readFileSync('./song2.txt', {encoding: 'utf8'})
var text2 = fs.readFileSync('./song3.txt', {encoding: 'utf8'})
console.log(text, text1, text2)

// ghi vào file
fs.writeFileSync('./song2.txt', 'im study nodejs')
fs.writeFileSync('./song3.txt', 'im am test writeFileSync')
fs.writeFileSync('./test.txt', 'test')