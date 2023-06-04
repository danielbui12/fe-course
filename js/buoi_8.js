/**
 * Array
 * [.. ,.. , .. , ..]
 */

// var number = [1, 2, 3, "4", { foo: 'bar'}, false]
// var number_1 = [1, 2, 3, "4", { foo: 'bar'}, false]

// console.log('number', number);

// for (var i = 0; i < number.length; i++) {
//   console.log(i, ': ', number[i]);
// }

// for ... of
// for (var _number of number) {
//   console.log(_number);
// }

// console.log(number == number_1)
// console.log(number === number_1)

/**
 * Phuơng thức trong Array
 * 
 * push - concat
 * pop
 * map
 * forEach
 * indexOf
 * filter
 * reduce
 * split - join
 */

// var emptyArray = [ {value:1}, {value: 2},{value: 3}];
// console.log('before', emptyArray);
// // console.log(emptyArray.push(1));
// // emptyArray = emptyArray.concat([1,2,3]);
// // console.log(emptyArray.pop());
// console.log('after', emptyArray);

// 1 -> 1

// var updateArray = emptyArray.map(function (value) {
//   return value * 2;
// })

// console.log(updateArray);

// function customMap(value, index, array) {
//   return value * 2;
// }

// var updateArray = emptyArray.map(customMap)


// emptyArray.forEach(function (value) {
//   console.log(value * 2)
// })

// tồn tại -> index
// không tồn tại -> -1
// console.log(emptyArray.indexOf(2));
// console.log(emptyArray.indexOf(199));


// lọc những số chẵn
// var evenArray = emptyArray.filter(function(value) {
//   return value % 2 === 0;
// })


// console.log('evenArray', evenArray);

// var sum = emptyArray.reduce(
//   function (prevValue, currentElement) {
//     console.log('prevValue', prevValue);
//     return prevValue + currentElement.value
//   },
//   0
// )

// console.log('sum', sum)


/**
 * Cho mảng array
 * Dùng reduce tính tổng tất cả những giá trị có kiểu dữ liệu là số
 * Điều kiện: Không được hardcode prevValue + currentElement.id + currentElement.random
 * Gợi ý: dùng typeof 
 */
// var array = [{
//   "id": 1,
//   "anoy": 497,
//   "email": "pdalliston0@google.ru",
//   "random": 47
// }, {
//   "id": 2,
//   "anoy": 660,
//   "email": "cgirardi1@icq.com",
//   "random": 85
// }, {
//   "id": 3,
//   "anoy": 174,
//   "email": "kkilfeder2@biblegateway.com",
//   "random": 16
// }, {
//   "id": 4,
//   "anoy": 711,
//   "email": "olodwick3@people.com.cn",
//   "random": 12
// }, {
//   "id": 5,
//   "anoy": 110,
//   "email": "vlanghorne4@amazon.com",
//   "random": 91
// }, {
//   "id": 6,
//   "anoy": 400,
//   "email": "emateuszczyk5@1688.com",
//   "random": 7
// }, {
//   "id": 7,
//   "anoy": 268,
//   "email": "jsaladine6@nih.gov",
//   "random": 72
// }, {
//   "id": 8,
//   "anoy": 905,
//   "email": "rflucker7@nature.com",
//   "random": 6
// }, {
//   "id": 9,
//   "anoy": 613,
//   "email": "wclare8@reference.com",
//   "random": 13
// }, {
//   "id": 10,
//   "anoy": 721,
//   "email": "adisley9@last.fm",
//   "random": 65
// }]

// var result = array.reduce(
//   function (prevValue, currentElement) {
//     // lặp qua những key trong object
//     for (var key in currentElement) { 
//       // lấy ra giá trị của object và kiểm tra kiểu dữ liệu của nó có phải number
//       if (typeof currentElement[key] === 'number') { 
//         prevValue += currentElement[key];
//       }
//     }
//     return prevValue;
//   }, 
//   0
// )

// console.log(result);


var permissions = 'READ_BOOK;WRITE_BOOK;UPLOAD_BOOK;DELETE_BOOK'

var arrayPermission = permissions.split(';')

var newArrayPermission = arrayPermission.filter(function(_permission) {
  return _permission !== 'UPLOAD_BOOK'
})

var updatePermissions = newArrayPermission.join(';')
console.log(updatePermissions);
