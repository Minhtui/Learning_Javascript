// Dùng qua để lọc các phần tử trong Array
console.log('----Example----');
var company = [
    {name: 'thinh', age: 24},
    {name: 'thien', age: 25},
    {name: 'thu', age: 23}
  ]
  
  for (var staff of company) {
    console.log(staff.name, staff.age)
  }

  console.log('----Exercise: Tính tích của các phần tử trong một array gồm các số----');
  function multiply (arr) {
    var mul = 1;
    for (var a of arr) {
      mul = mul * a
    }
    return mul
  }
  console.log(multiply([2, 3, 4]))

  console.log('----Exercise: Tính tổng các số nguyên có trong mảng----');
  function sum (numbers) {
    var sums = 0
    for (var value of numbers) {
      sums += value
    }
    return sums
  }
  console.log(sum([]))
  console.log(sum([1,2,3,4]))
  