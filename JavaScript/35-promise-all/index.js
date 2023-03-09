var fs = require('fs')

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, { encoding: 'utf-8'}, function(err, data) {
            if (err) {
                reject (err)
            } else {
                resolve (data)
            }
        })
    })
}

// rút gọn các method gọi trong promise
// nhận 1 array gồm các promise trả về cùng promise
Promise.all([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt')
]).then(function(values) {
    console.log(values);
}).catch(function(error) {
    console.log(error);
})