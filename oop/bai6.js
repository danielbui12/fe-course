//Có thể tạo các hàm A và B như new A() == new B() không?
//Nếu đúng, hãy viết code đó.

function A() { }
function B() { }

var a = new A();
var b = new B();

console.log(a == b); // true
