
var fs = require('fs') 

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, {encoding: 'utf-8'}, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


// async function run() {
//     var song1 = await readFilePromise('./song1.txt')
//     var song2 = await readFilePromise('./song2.txt')
//     return [song1, song2]
// }

// run().then(function(values) {
//     console.log(values);
// })

console.log('----Example----');

// the async keyword will automatically create a new Promise anh return it
async function getFileSong() {

    // the await keyword saves us from having to write a .then block
    let song1 = await readFilePromise('./song1.txt')
    let song2 = await readFilePromise('./song2.txt')

    // the result of the GET request is available in the song1, song2 variable
    // we return it just like in a regular synchronous function
    return [song1, song2]
}

getFileSong().then(function(values) {
    console.log(values);
})

// Promise.all allows us to send all requests at the same

async function getABC () {
    // Promise.all allows us to send all requests at the same
    let results = await Promise.all([song1, song2])
    return results.reduce(function (total, value) {
        return total * value
    })
}