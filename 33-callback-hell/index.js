// callback hell xuất hiện khi có nhiều callback lồng nhau, giảm chậm chương trình
// Do tính bất đồng bộ trong js nên mới sinh ra callback hell

var fs = require('fs')

fs.readFile('./song1.txt', {encoding: 'utf-8'}, function (err, song1) {
    console.log(song1);
    fs.readFile('./song2.txt', {encoding: 'utf-8'}, function (err, song2) {
        console.log(song2);
        fs.readFile('./song3.txt', {encoding: 'utf-8'}, function (err, song3) {
            console.log(song3);
        })
    })
})

// Use Promise để khắc phục