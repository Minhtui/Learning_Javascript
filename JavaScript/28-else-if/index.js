/**
 * syntax:
 * if (condition 1) {
 *  statement 1
 * } else if (condition 2) {
 *  statement 2
 * } else {
 *  statement 3
 * }
 */

//caculate bus ticket free
/**
 * if age < 15, discount 20%
 * if age > 60, discount 10%
 * otherwise, 10000/ticket
 */

function getTicketFree (person) {
    var basePrice = 10000

    if (person.age < 15) {
        return 10000 * 0.8
    } else if (person.age > 60) {
        return 10000 * 0.9
    } else {
        return basePrice
    }
}

var person = {
    age: 80
}

var free = getTicketFree(person)
console.log(free);

