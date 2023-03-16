// Dùng để lọc qua các key trong Object

console.log('----Example----');

var myDog = {
    name: 'lu',
    age: 3,
    weight: 5
  }
  for (var key in myDog) {
    console.log(key, myDog[key] )
  }
  //Truy cập key của object
  //myDog.name // myDog['name'] = lu
 
  console.log('----Exercise: Lấy về tất cả các key của object----');
  // in ra cả các key của các nested object (object con lồng bên trong object lớn)
  var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  }
  
  var keys = [];
  
  function getObjectKey (obj, keys) {
    if (typeof keys === 'undefined') {
      var arr = []
    } else {
      arr = keys
    }
    for (var key in obj) {
      arr.push(key)
      if (typeof obj[key] === 'object')
        getObjectKey(obj[key], arr)
    }
    return arr
  }
  
  // getObjectKey(apartment, keys)
  getObjectKey(apartment)
  console.log(getObjectKey(apartment))

  console.log('----Exercise: Kiểm tra object có tồn tại 1 key xác định hay không----');
  /**
  Tham số : 
  object: object cần kiểm tra
  key: key cần kiểm tra xem có tồn tại trong object không
  **/
  
  function has (object, key) {
    for (var keyObject in object) {
      if (key === keyObject) {
        return true
      }
    }
    return false
  }
  
  console.log( has({name: "Tom", age: 21}, "name"))
  console.log( has({name: "Maria", age: 18}, "gender"))