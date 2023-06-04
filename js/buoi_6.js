/**
 * function
 */


// function tenFunction(a, b = 4, c, d = 5) {
//   return a + b + c + d;
// }

// console.log(tenFunction(1,undefined,3,undefined))

// call back
// thread

function tinhTong(a, b, cb) {
  cb(a+b);
}


function inRa(tong) {
  console.log(tong);
}

tinhTong(2, 3, inRa);