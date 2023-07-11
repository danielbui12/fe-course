/**
 * Hoisting: JS run-time tự động khai báo các biên var ở trên đầu 
 */


var x = 5; // global variable

function run() {
  var x;
  // scope variable
  console.log(x);






























  var x = 10;
}


run()