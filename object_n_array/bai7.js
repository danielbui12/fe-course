// Viết một hàm JavaScript để kiểm tra xem hai đối tượng có chứa tất cả các thuộc tính giống nhau hay không.
/**
 * Object bằng nhau khi:
 * - length bằng nhau
 * - các thuộc tính phải giống nhau
 * - giá trị của các thuộc tính cũng phải bằng nhau
 */

function areObjectsEqual(obj1, obj2) {
	var obj1Keys = Object.keys(obj1); // trả về mảng các thuộc tính
	var obj2Keys = Object.keys(obj2); // trả về mảng các thuộc tính

	if (obj1Keys.length !== obj2Keys.length) {
		return false;
	}

	/*
	for (var i = 0; i < obj1Keys.length; i++) {
		if (obj1Keys[i] !== obj2Keys[i]) {
			return false;
		}
	}

	for (var _key in obj1) {
		if (obj1[_key] !== obj2[_key]) {
			return false;
		}
	}
	*/

	for (var _key in obj1) {
		if (obj1[_key] !== obj2[_key]) {
			return false;
		}
	}

	return true;
	
}

// Ví dụ:
var person1 = {name: "John", age: 30};
var person2 = {name: "John", age: 30};
var person3 = {name: "John", age: 25};
console.log(areObjectsEqual(person1, person2)); // Kết quả là true
console.log(areObjectsEqual(person1, person3)); // Kết quả là false

