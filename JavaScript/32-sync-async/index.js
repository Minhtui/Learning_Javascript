//Make coffee -> 5p
//Wear clothes
//Making bec
//sync
//------|--------------------|--------------------|----------|------>
// Make coffee           coffee done          wear done    Done
//                       waer clothes         Make bend
//async
//-----|--------------|--------------|---------|------>
// Make coffee    Wear clothes    Make bed    Done

var fs = require('fs')

console.log('----SYNC----');
console.log('start');
var song = fs.readFileSync('./song.txt', {encoding: 'utf-8'})
console.log(song);
var song1 = fs.readFileSync('./song1.txt', {encoding: 'utf-8'})
console.log(song1);

console.log('end');

console.log('----ASYNC----');
console.log('start')
fs.readFile('song.txt', {encoding: 'utf-8'}, function(err, song) {
    console.log(song)
})

console.log('end')

// console.log('----Exercise----');

/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) 
 * để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. 
 * Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */

// var request = require('request')
// console.time('Time this')
// request('https://randomuser.me/api/', function(error, response, body) {
//     console.log('body: ', body);
// })
// console.log('Time this');

// console.log('----Exercise1----');
/**
 * Sử dụng module `axios` để tải dữ liệu và hiển thị ra màn hình lần lượt
 *  từng đường link (xong cái này rồi mới tới cái kia):
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 */

// var axios = require(`axios`)
// var url1 = 'https://jsonplaceholder.typicode.com/todos/1'
// var url2 = 'https://jsonplaceholder.typicode.com/todos/2'

// function getData() {
//     var a = axios.get(url1).then(function(response) {
//         console.log(response.data);
//     }).catch(function(err) {
//         console.log(err);
//     })
//     var b = axios.get(url2).then(function(response) {
//         console.log(response.data);
//     }).catch(function(err) {
//         console.log(err);
//     })
//     return a, b
// }

// getData()