//syntax:
//reduce(function callback(accumulator, curentValue, index, array) {},initialValue)

console.log('----Example----')

var products = [
    {name: 'a', price: 2, unitPrice: 10},
    {name: 'b', price: 3, unitPrice: 20},
    {name: 'c', price: 4, unitPrice: 30}
  ]
  
  var total = products.reduce(function (currentTotal, product) {
    return currentTotal + product.price * product.unitPrice
  }, 0)
  
  console.log(total)
  
  console.log('-------------------------')
  
  var items = ['kim', 'tom','bill']
  
  var evenItem = items.reduce(function (currentValue, item) {
    console.log(currentValue, item)
    return currentValue + '<' + item + '>'
  }, '')
  console.log(evenItem)
  
  
  console.log('----Exercise----');
  /**
   * Count the occurrences of each element inside an array using reduce
   * @params {array}
   * @return {object}
   * Example: 
   * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
  }
  */
  
  function countOccurrences(arr) {
    //{} chính là giá trị khởi tạo (đối số thứ 2)
    //newObject :  lưu vào biến newObject
    //key : từng phần tử của mảng arr
    return arr.reduce(function(newObject, key) {
      if (newObject[key]) // nếu đối tượng newObject có item có key là 1 phần tử trong arr
        //nếu có
        key = newObject[key]++ // tăng value của item của đối tượng lên 1 đơn vị
        // nếu không 
      else newObject[key] = 1 // thêm 1 item cho đối tượng newObject có key và value là 1
      return newObject
    }, {})
  }
  
  console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']))
  
  console.log('----Exercise: Cho một mảng có nhiều mảng bên trong, kết hợp chúng thành một mảng duy nhất----');
   /* Example: 
   * var arrays = [
   *    ["1", "2", "3"],
   *    [true],
   *    [4, 5, 6]
   *  ];
   * 
   * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
   */
  
  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
    }, [])
  }
  
  console.log(flatten([["1", "2", "3"], [true], [4, 5, 6] ]))
  
  
  
  