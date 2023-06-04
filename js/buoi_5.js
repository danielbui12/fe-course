/**
 * Câu lệnh rẽ nhánh
 * if (điều kiện) { ... }
 * else if (điều kiện) { ... }
 * else { ... }
 */

// var a = 5
// if (a > 5) {
//   console.log('a > 5')
// } else if (a < 5) {
//   console.log('a < 5')
// } else {
//   console.log('a = 5')
// }

/**
 * 
 * switch(biến): {
 *  case giá trị:
 *    ....
 *    break;
 *  case giá trị:
 *    ....
 *    break;
 *  default:
 *    break;
 * }
 */

// var b = 5 % 3;
// switch (b) {
//   case 0:
//   case 1:
//     console.log(' <= 1');
//     break;
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log(' > 1');
//     break;
//   default:
//     console.log('no match');
//     break;
// }




// ternary operator
/**
 * &&                           & : and
 * ||                           | : or
 */

var success_res = {
  status: 200,
  data: { foo: 'bar' },
  error: null
}

var failure_res = {
  status: 500,
  data: null,
  error: "Unknown error"
}

var datatype_error_res = {
  status: 400,
  data: null,
  error: "datatype doesn't match"
}


// if (success_res.status === 200 && success_res.data) {
//   console.log('response: ', success_res.data);
// }

// if (failure_res.status === 500 && failure_res.error) {
//   console.log('error msg: ', failure_res.error);
// }

if (datatype_error_res.status === 500 || datatype_error_res.error) {
  console.log('something went wrong: ', datatype_error_res.status, datatype_error_res.error);
}