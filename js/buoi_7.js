/**
 * Object
 * property
 * { key: value }
 */


// var doDung = {
//   'tu lanh': "LG"
// }

// console.log(doDung['tu lanh'])

// var sinhVien = {
//   age: 21,
//   name: 'Tung',
//   sayHello: function () {
//     console.log('Hello', sinhVien.name)
//   }
// }

// sinhVien.sayHello()
// console.log('sinh vien', sinhVien.sayHello())

// for (tên biến 'in' object) { ... }
// for (var key in sinhVien) {
//   console.log('key', key)
//   console.log('value', sinhVien[key])
// }

// var sinhVien_1 = {
//   age: 21,
//   name: 'Tung',
//   sayHello: function () {
//     console.log('Hello', sinhVien.name)
//   }
// }

// Object lưu trong bộ nhớ
// ghi so sánh thì nó so sánh địa chỉ bộ nhớ chứ không so sánh giá trị của Object
// console.log(sinhVien == sinhVien_1)
// console.log(sinhVien === sinhVien_1)

// var object = { 
//   100: "a", 
//   2: "b", 
//   7: "c" 
// };

// console.log(Object.keys(object)); // ['2', '7', '100']
// console.log(Object.values(object))

var sinhVien = {
  age: 21,
  name: 'Tung',
  sayHello: function () {
    console.log('Hello', sinhVien.name)
  }
}

var sinhVien_1 = {
  queQuan: 'Ha Noi',
  familyName: 'Bui'
}

var sinhVien_2 = {
  queQuan: 'Ha Noi',
  age: 22,
  gioiTinh: "Nammmmmmmmm"
}

var sinhVien_version2 = {}
Object.assign(sinhVien_version2, sinhVien, sinhVien_1, sinhVien_2)


/** Kiểm tra key tồn tại trong Object */


// if ('gioiTinh' in sinhVien_version2) {
//   console.log(sinhVien_version2.gioiTinh)
// } else {
//   sinhVien_version2.gioiTinh = 'Nam'
//   console.log('sinhVien_version2', sinhVien_version2)
// }


// console.log(Object.hasOwn(sinhVien_version2, 'gioiTinh'))


console.log(sinhVien_version2.hasOwnProperty('gioiTinh'))





