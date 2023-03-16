console.log('----Exercise----');

var courses = [
    {name: 'js', coin: 1000, id: 1, categoryId: 1},
    {name: 'php', coin: 2000, id: 2, categoryId: 2},
    {name: 'java', coin: 3000, id: 3, categoryId: 2},
    {name: 'html,css', coin: 1500, id: 4, categoryId: 1},
    {name: 'html,css pro', coin: 1000, id: 5, categoryId: 1}
  ]
  
  function filterCourses(products, categoryId) {
    return courses.filter(function (x) {
      if (x.categoryId === categoryId)
      {
        return products
      } })
  }
  
  filterCourses(1)
  
  console.log('----Exercise----');
  /**
   * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
   * Tìm hiểu thêm indexOf:
   * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   * Example:
   * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
   * 
  */
  
  function removeDuplicate(arr) {
    var newArr = []
    return arr.filter(function (x) { // lọc mảng
      if (newArr.indexOf(x) == -1) { // thêm vào phần tử đó vào mảng mới nếu chưa có
        newArr.push(x) // thì thêm vào
        return true // trả về kết quả
      }
      return false // còn nếu có rồi thì không them vào
    })
  }
  
  console.log(removeDuplicate([1, 1, 2, 3, 3]))
  
  
  
  