/*
  Tạo một hàm multiplyNumeric(obj) nhân tất cả các thuộc tính số của obj với 2.
với Object sau:
*/
// before the call
var menu = {
  width: 200,
  height: 300,
  title: "My menu cafedev"
};

console.log('before the call', menu);

multiplyNumeric(menu);

console.log('after the call', menu);

/* after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu cafedev"
};

Xin lưu ý rằng multiplyNumeric(obj) không cần trả về bất cứ thứ gì. 
Nó sẽ sửa đổi đối tượng tại chỗ

*/