/**
 * con trỏ this: đại diện cho cả đối tượng
 * new
 * prototype
 * __proto__
 * 
 * 
 */

// var person = {
//   name: "Tung",
//   age: 21,
//   showName: function () {
//     var that = this
//     return function (msg) {
//       console.log(that.name, 'says', msg);
//     }
//   }
// }

// var say = person.showName()

// say('hello')

Object.prototype.say = function(msg) {
  console.log(msg);
}

var person = { }

person.say('Hello');



// function Person(msg) {
//   this.msg = msg;
// }

// Person.prototype.say = function() {
//   console.log(this.msg)
// }

// var person = new Person("hello")
// person.say()

// var person2 = new Person('olleh')





