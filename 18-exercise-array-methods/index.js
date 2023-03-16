console.log('----Exercise: splice----');
var animals = [
    'ant',
    'bison',
    'camel',
    'duck',
    'elephant',
    'dog',
    'cat',
    'mouse'
  ]
  // console.log(animals.slice(1, 4))
  animals.splice(5,0,'rabit', 'fish')
  console.log(animals)
  
  console.log('----Exercise: map----');
  var rectangles = [
    {w: 10, h: 5},
    {w: 10, h: 20}
  ]
  var areaRectangles = rectangles.map (function (x) {
    // console.log(x)
    return x.w * x.h
  })
  
  console.log(areaRectangles)
 
  console.log('----Exercise: Dùng map và callback----');
  /**
   * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
   * 2. Viết hàm multiply nhận vào một mảng numbers, 
   * sử dụng map method và hàm tripple để trả về 1 mảng 
   * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
   */
  
  function tripple (num) {
    return num * 3
  }
  
  function multiply (numbers) {
    return numbers.map(function (x) {
      return tripple(x)
    })
  }
  
  console.log(tripple(3))
  console.log(multiply([10,5,8]))
 
  console.log('----Exercise: Viết hàm trả về 1 mảng chứa tên của các use----');
  var users = [
    {name: 'Angelina Jolie', age: 80},
    {name: 'Eric Jones', age: 2},
    {name: 'Paris Hilton', age: 5},
    {name: 'Kayne West', age: 16},
    {name: 'Bob Ziroll', age: 100}
  ]
  
  function namesOnly (arr) {
    return arr.map(function (x) {
      return x.name
    })
  }
  
  console.log(namesOnly(users))
  
  function readyToPutInTheDOM (arr) {
    return arr.map(function (x) {
      return "<h1>" + x.name + "</h1><h2>" + x.age + "</h2>"
    })
  }
  
  console.log(readyToPutInTheDOM(users))

  console.log('----Exercise: Cho một mảng số, trả về một mảng mới chỉ có các số từ 5 trở lên----');
  function fiveAndGreaterOnly (arr) {
    return arr.filter(function (x) {
      return x >= 5
    })
  }
  
  console.log(fiveAndGreaterOnly([1,2,3,4,5,6,7]))
  
  console.log('----Exercise: Cho một mảng số, trả về một mảng mới chỉ bao gồm các số chẵn----');
  function evensOnly (arr) {
    return arr.filter(function (x) {
      return x % 2 === 0
    })
  }
  
  console.log(evensOnly([1,2,3,4,5]))
 
  console.log('----Exercise: Cho list student, lọc ra non-female----');
  var members = [
    {name: 'linh', gender: 'female'},
    {name: 'trung', gender: 'male'},
    {name: 'kien', gender: 'gay'}
  ]
  
  function filterOutFemales (members) {
    return members.filter(function (x) {
      return x.gender != 'female'
    })
  }
  
  console.log(filterOutFemales(members))
 
  console.log('----Exercise----');
  //Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method, 
  //Nếu không tìm thấy số chẵn nào thì trả về undefined

  function findFirstEvenNumber (arr) {
    return arr.find(function (x) {
      return x % 2 === 0
    })
  }
  
  console.log(findFirstEvenNumber([1,3,5,7,9,8,6]))
 
  console.log('----Exercise: Tìm số chia hết cho x----');
  /**
   * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
   * @params {array} array - Mảng các chữ số
   * @params {number} x - Số bị chia
   * Nếu không có trả về undefined
   * Example: 
   * findDivisibleNum([1, 3, 4], 2) => 4
   */
  
  function findDivisibleNum (arr, x) {
    return arr.find(function (numbers) {
      return numbers % x === 0
    })
  }
  
  console.log(findDivisibleNum([1,3,4], 2))
  
 
  console.log('----Exercise: Biến đổi mảng các đối tượng cử tri thành số lượng người bỏ phiếu----');
  var voters = [
    {name: 'thinh', age: 49, voted: true},
    {name: 'thien', age: 34, voted: true},
    {name: 'thu', age: 23, voted: true},
    {name: 'thuc', age: 45, voted: false},
    {name: 'thuy', age: 25, voted: true},
    {name: 'thang', age: 34, voted: false},
    {name: 'than', age: 35, voted: false},
    {name: 'thung', age: 45, voted: true},
    {name: 'thuan', age: 34, voted: false}
  ]
  
  function totalVotes (arr) {
    return arr.reduce(function(count, x) {
      return count + x.voted
    }, 0)
  }
  
  console.log(totalVotes(voters))

  console.log('----Exercise----');
  //Đưa ra một loại tất cảc các mặt hàng trong danh sách yêu thích của bạn, 
  //hãy tính xem sẽ tốn bao nhiêu nếu chỉ mua mọi thứ cùng một lúc

  var wishlist = [
    {title: 'Tesla Model S', price: 90000},
    {title: '4 carat diamond ring', price: 45000},
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ]
  
  function shoppingSpree(wishlist) {
    return wishlist.reduce(function (currentTotal, product) {
      // console.log(currentTotal, product)
      return currentTotal + product.price
    }, 0)
  }
  
  console.log(shoppingSpree(wishlist))
  
  
  function arrayTitle (wishlist) {
    return wishlist.map(function (x) {
      return x.title
   })
  }
  
  console.log(arrayTitle(wishlist))
  
  console.log('----Exercise----');
  /* Filter các sản phẩm khi biết id danh mục sản phẩm
    Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
    khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
    thì filter các sản phẩm của danh mục đó.
    var categories = [
      { id: 1, name: 'Đồ điện tử'},
      { id: 2, name: 'Đồ gia dụng'},
      { id: 3, name: 'Nội thất'}
    ];
  */

  var listProducts = [
   {id: 1, categoryId: 1, name: 'Tivi'},
   {id: 2, categoryId: 1, name: 'Tủ lạnh'},
   {id: 3, categoryId: 3, name: 'Ghế sofa'},
   {id: 4, categoryId: 1, name: 'Máy giặt'},
   {id: 5, categoryId: 2, name: 'Chén bát'},
   {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
   {id: 7, categoryId: 3, name: 'Cửa kính'},
   {id: 8, categoryId: 1, name: 'Điều hoà'},
   {id: 9, categoryId: 3, name: 'Bàn tròn'},
   {id: 10, categoryId: 2, name: 'Lò vi sóng'},
  ]
  
  function filterProductsByCategoryId (products,categoryId) {
    return listProducts.filter(function (x) {
      if (x.categoryId === categoryId) {
        return products
      }
    })
  }
  
  console.log(filterProductsByCategoryId(listProducts, 2))