/**
 * switch case
 * syntax:
 * switch (expression) {
 *  case value1: 
 *  //do something 
 *  break
 *  case value2:
 *  // do something 
 *  break
 *  ...
 *  default: 
 *  // do something
 *  break
 * }
 */

console.log('----Example----')
var date = 6

switch(date) {
    case 2:  
        console.log('today monday');
        break
    case 3:
        console.log('today tuesday');
        break
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
        console.log('this week');
        break
    default: 
        console.log('not this week');
        break
}

console.log('----Example1----')

/**
 * brozen, silver, gold, diamond
 * discount:
 * brozen: 2%
 * silver: 5%
 * gold: 8%
 * diamond: 10%
 */

var memberCard = {
    tier: 'silver'
}

function getTicketMovie (price, card) {
    var discountTicket 

    switch (card.tier) {
        case 'brozen':
            discountTicket = 0.02
            break;
        case 'silver':
            discountTicket = 0.05
            break
        case 'gold':
            discountTicket = 0.08
            break
        case 'diamond':
            discountTicket = 0.1
            break
        default:
            break;
    }
    return price = (1 - discountTicket)
}

var total = getTicketMovie(200000, memberCard)
console.log(total);

console.log('----Example2----');

var trafficLight = 'yellow'

function getGoorNotInVietNam (lightValue) {
    switch (lightValue) {
        case 'green' :
            console.log('go');
            break
        case 'yellow':
            console.log('slow-down');
            break
        default:
            console.log('stop');
            break
    }
}

getGoorNotInVietNam(trafficLight)

