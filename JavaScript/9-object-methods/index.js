// Object methods (các phương thức của object)
// khi một function được gắn với 1 property của 1 object nào đó 
//-> nó là method của object đó

console.log('----Example----')

var studentUniversity = {
    name: 'nhu',
    gender: 'female',
    age: 21,
    numberPhone: 0903530693,
    point: 7,
    typeGame: 'simulation',
    game: function() {
      console.log('rentPlace, game thể loại', this.typeGame)
    },
    study: function(js) {
      this.point = this.point + js.point;
      return this;
    }
  }
  
  console.log(studentUniversity) // Hiện object studentUniversity
  
  var js = {point : 3};// Khai báo thuộc tính js
  
  console.log('before study: ', studentUniversity.point)// In ra point trước khi gán thuộc tính study(js)
  
  studentUniversity.study(js);// Gán biến study(js)
  
  console.log('after study js: ', studentUniversity.point)// In ra point sau khi gán thuộc tính study(js)

  console.log('----Example: Thay đổi thuộc tính function trong object----')

  function game() {
    console.log('game:' + 'farmFamily')
  }
  game()
  
  console.log('----Exercise----');

  var rectangle = {
    width: 20,
    height: 30,
    getWidth: function() {
      return this.width
    },
    getHeight: function() {
      return this.height
    },
    getArea: function() {
      return this.height * this.width
    }
  }
  console.log(rectangle)
  //----------------------------------------
  console.log(rectangle.width)
  console.log(rectangle.getWidth())
  //----------------------------------------
  console.log(rectangle.height)
  console.log(rectangle.getHeight())
  //----------------------------------------
  console.log(rectangle.getArea())