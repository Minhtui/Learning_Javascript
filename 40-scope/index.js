//1. Global scope
//2. Local scope

var a = 1
// var b = 2
function random() {
    var b = Math.random()
    a = 3
    console.log(b);
}

function doSomething() {
    a = 5
}

doSomething()
random()
// doSomething()
console.log(a)

// console.log(b);

// var y = random(a)

