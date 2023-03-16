/**
 * syntax
 * if (condition) {
 * statement when true;
 * } else {
 * statement when false}
 */

// var date = 9

// if (date === 2) {
//     console.log('today monday');
// } else if (date === 3){
//     console.log('today tuesday');
// } else if (date <= 8) {
//     console.log('today in week');
// } else {
//     console.log('day not in week');
// }

// function tossCoin () {
//     var value = Math.random() 
//     if (value < 0.5) {
//         console.log('up');
//     } else {
//         console.log('down');
//     }
// }

// tossCoin()

//

// function shouldDateHer () {
//     var value = Math.random()
//     if (value < 0.5) {
//         console.log('yes, of course!!!');
//     } else {
//         console.log('no, she has a boyfriend');
//     }
// }
// shouldDateHer()

//
var bills = [
    {value: 10000},
    {value: 20000},
    {value: 50000, fake: true},
    {value: 500000}
]

function countBills (bills) {
    var total = 0
    for (var bill of bills) {
        if (!bill.fake) {
            total += bill.value
        }
        else {
            console.log('fake bill', bill);
            break
        }
    }

    return total
}

var total = countBills(bills) 
console.log(total);
