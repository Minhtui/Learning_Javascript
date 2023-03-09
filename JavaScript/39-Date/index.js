var moment = require('moment')

// var now = new Date()
// var myBirthday = new Date(2001, 04, 20)

// console.log(now.getTime())
// console.log(myBirthday.getTime());

// var now = moment('2018-07-12 07:00')
// console.log(now.fromNow());
// console.log(now.format('YYYY/MM/DD'));

//moment.js

var date = new Date()

var time = date.getTime()
console.log(time)

console.log('----Exercise----');
/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
    var day = new Date(dateString)
    if (day.getDay() == 0 || day.getDay() == 6) {
        return true
    } else return false
}

console.log(isWeekend('2023-01-22'));

console.log('----Exercise1----');

/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date ('2019-10-17')
var toDate = new Date ('2019-10-21')

function diff(fromDate, toDate) {
    return (toDate.getDate() - fromDate.getDate()) 
}

console.log(diff(fromDate, toDate));

console.log('----Exercise2----');

/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date('06-10-2019')
function subtractDays(date, n) {
    return date.getTime() - n*24*60*60*1000
}

console.log(subtractDays(date, 1));

console.log('----Exercise3----');

/**
 * Tính số ms chênh lệch giữa date b và date a
 diffMs("02/10/2019", "10/10/2019")
 */

 function diffMs(a, b) {
    return (new Date(b)).getTime() - (new Date(a)).getTime() 
 }

 console.log(diffMs("02/10/2019", "10/10/2019"));