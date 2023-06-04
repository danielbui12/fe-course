/**
 * vòng lặp
 * for
 * while
 * do while
 */

// // for (biến khởi tạo; điều kiện; kiểu hoạt động) { ... }
// var array = [1, 2, null, 3, 4, null]
// for (var i = 0; i < 6; i++) {
//   if (array[i] === null) {
//     continue; // skip
//   }
//   console.log(i);
// }
/**
 * i = 0
 * i < 6 true
 * array[0] = 1
 * 1 == null => false
 * log(1)
 * ....
 *
 * arr[2] === null => true
 */

// var string = 'Variables declared with let are local to the statement'
// for (var i = 0; i < string.length; i++) {
//   console.log(string[i])
// }

// while (điều khiện) { ... }

// var a = 10
// while (a > 0) {
//   if (a < 5) { // a = 4
//     break;
//   }
//   console.log(a);
//   a--;
// }

/**
 * do { // chạy ngầm trong memory
 *  ...
 * } while (điều kiện)
 */

var a = 10;
do {
  // if (a < 5) { // a = 4
  //   break;
  // }
  a--;
} while (a > 0);

console.log(a);

