// var fs = require('promise-fs')
// fs.readFile('song1.txt', {encoding: 'utf8'})
// .then(function(song1) {
//     console.log(song1)
// })
// .catch(function(err) {
//     console.log(err)
// })


// console.log('----Example----');
// var promiseFs = require('promise-fs')

// function onDone (song) {
//     console.log(song);
// }

// function onError (error) {
//     console.log(error);
// }

// function readFile(path) {
//     return promiseFs.readFile(path, {encoding: 'utf8'});
// }

// readFile('song1.txt')
// .then(onDone) 
// .then(function() {
//     return readFile('song2.txt')
// })
// .then(onDone)
// .catch(onError)

console.log('----Example1----');
var fs = require('fs');

function readFilePromise (path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, {encoding: 'utf8'}, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

readFilePromise('song1.txt')
.then(function(song1) {
    console.log(song1);
})
.catch(function(error) {
    console.log(error);
})

// console.log('----Exercise----');
/**
 * Module `request` dùng để tải về 1 đường dẫn nào đó. 
 * Hãy thử chạy code để xem cách hoạt động
 */

// var request = require('request')

// console.log('Start fetching...');

// request('https://jsonplaceholder.typicode.com/todos/1', function (err, reponse, body) {
//     if(err != null) {
//         console.log('err: ', err);
//     } console.log('done: ', body);
// })

// console.log('nothing');

// console.log('----Exercise1----');
/**
 * Viết function `load` nhận vào 1 tham số là 1 đường link dạng string, 
 * trả về 1 promise sao cho khi gọi:
 * load('some url').then(function(body) {
 *   console.log('Done', body);
 * });
 * thì sẽ hiển thị ra màn hình 'Done' kèm theo nội dung đường link 
 * đã truyền vào.
 */

// function load(url) {
//     return new Promise(function(resolve, reject) {
//         request(url, function(err, response, body) {
//             if(err != null) {
//                 reject(err)
//             } resolve(body)
//         })
//     })
// }

// load('https://jsonplaceholder.typicode.com/todos/1')
// .then(function(body) {
//     console.log('done: ', body)
// })