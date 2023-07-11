// // rest
// function a(param1, ...rest) {
//   console.log('param1', param1);
//   console.log('rest', rest)
// }


// a(1,23,43,234,234,234)

// spread
// var a = [ 1, 2, 3, 4 ]
// var b = [ 5, 6, 7, 8 ]

// // a = a.concat(b)

// a = [...a, ...b, 12, 13, 14]

// console.log(a);


var obj1 = {
  key: 'value',
  key1: {
    key2: 'value2'
  }
}

var obj2 = {
  foo: 'bar'
}


console.log({
  ...obj1,
  ...obj2,
  new: 'new'
})