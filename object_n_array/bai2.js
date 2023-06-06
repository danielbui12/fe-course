/**
 * Viết hàm isEmpty (obj) trả về true nếu đối tượng không có thuộc tính, ngược lại là false.

Để sử dụng cho đoạn code sau:
*/

function isEmpty(schedule) {

}

var schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false