// settimeout
// clearTimeout

// setTimeout(function, ms)// ms-khoảng thời gian 

// timer
function done() {
    console.log('finish');
}
console.log('start');
var timeoutId = setTimeout(done, 1000)
console.log('done');
clearTimeout(timeoutId) // khi muốn huỷ 

console.log('----Exercise----');

/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */

function doAfter(func, time) {
    console.log('wait 1s');
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(func())
        }, time)
    })
}

function sayHello() {
    console.log('hello');
}

function sayGoodbye() {
    console.log('bye');
}

doAfter(sayHello, 1000)
    .then(sayGoodbye)


