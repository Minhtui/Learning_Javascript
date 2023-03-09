/**
 *  ternary operator: Toán tử rút gọn của if else
 * syntax:
 * condition ? expression when true : expression whe false
 */

function tossCoin () {
    var value = Math.random() 
    var result = (value < 0.5) ? 'up' : 'down'
    // if (value < 0.5) {
    //     result = 'up';
    // } else {
    //     result = 'down';
    // }
    console.log(result);
}

tossCoin()