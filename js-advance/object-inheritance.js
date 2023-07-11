// enhanced object literals 

// var obj = {
//   key: "value"
// }

var key = "value"

var obj = {
  key,
  run() {
    console.log('run')
  }
}


console.log(obj)
obj.run()