/**
 Reference types - Kiểu dữ liệu tham chiếu
- Array: to store a list of elements

 */

var dog1 = {
    type: 'corgi'
}

var dog2 = {
    type: 'husky'
}

var dog3 = {
    name: 'ngaos',
    type: 'alaska'
}

var dogs = [dog1, dog2, dog3]

console.log(dogs); //show an array

console.log(dogs[2]); // choose index show object in an array

console.log(dogs[2].name); // show the name of the object in an array

var dog4 = {
    type: 'shiba'
}

dogs[1] = dog4 // replace dog2 with dog4

console.log(dogs);