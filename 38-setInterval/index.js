// setInterval
// clearInterval

// setInterval(fn, ms)

// console.log('----Example----');

// var i = 0
// var intervalId = setInterval(function() {
//     ++i
//     console.log(i)
//     if (i === 5) {
//         clearInterval(intervalId)
//     }
// }, 1000)

console.log('----Example1----');

/**
 * Write a function count from 1 to 10
 * return a promise
 */


function countFrom(a, b) {
    return new Promise(function(resolve, reject) {
        var setIntervalId = setInterval(function() {
            console.log(a);
            ++a
            if (a > b) {
                clearInterval(setIntervalId)
                resolve()
            }
        },500)
    })
}

countFrom(1, 10).then(function() {
    console.log('Done')
})

// console.log('----Exercise----');

/**
 * Viết hàm countDown đếm ngược từ x về 0, 
 * mỗi lần đếm cách nhau 1s, 
 * sau đó hiển thị 'Happy new year'
 */

// function countDown(x) {
//     var id = setInterval(function() {
//         console.log(x);
//         x--
//         if (x < 0) {
//             clearInterval(id)
//             console.log('happy new year');
//         }
//     })
// }

// countDown(5)

// console.log('----Exercise1----');

/**
 * Viết hàm countDown đếm ngược từ x về 0, 
 * mỗi lần đếm cách nhau 1s, trả về promise, 
 * promise này resolve sau khi đã đếm xong
 */

// function countDown(x) {
//     return new Promise(function(resolve, reject) {
//         var id = setInterval(function() {
//             console.log(x);
//             x--
//             if (x < 0) {
//                 clearInterval(id)
//                 resolve()
//             }
//         }, 1000)
//     })
// }

// function sayHappyNewYear() {
//     console.log('happy new year!!!');
// }

// countDown(5).then(sayHappyNewYear)