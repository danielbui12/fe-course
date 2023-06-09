/** 
 * 
 * bind - call - apply 
 * + bind: chỉ gán
 * + call: thừa kế bind và gọi thực thi luôn
 * + apply: thừa kế từ bind và gọi luôn
 */

// var person = {
//   firstName: 'Huy',
//   lastName: 'Tung',
//   showName: function () {
//     console.log(this.firstName, this.lastName);
//   }
// }

// // person.showName()

// var person_1 = {
//   firstName: 'Nguyen'
// }


// var person_1_showName = person.showName.bind(person_1)

// person_1_showName()


// ========================== 


// var animals = [
//   { species: 'lion', name: 'king' },
//   { species: 'tiger', name: 'Fail' },
// ]

// function print(i) {
//   console.log(i, this.name, 'of', this.species, 'says');
// }

// for (let i = 0; i < animals.length; i++) {
//   print.call(animals[i], i)
// }



// function greet() {
//   var message = [this.person, 'says', this.msg]
//   console.log(message.join(' '))
// }

// var msgBox_1 = {
//   person: "Tung",
//   msg: "hello"
// }

// var msgBox_2 = {
//   person: "A",
//   msg: "bye"
// }

// greet.call(msgBox_1)
// greet.call(msgBox_2)


// function Product(name, price) {
//   this.name = name
//   this.price = price
// }

// function Food(name, price) {
//   Product.call(this, name, price)
//   this.category = 'food'
// }

// function Toy(name, price) {
//   Product.call(this, name, price)
//   this.category = 'good'
// }

// var toy = new Toy('Andy', '100000000')
// var chicken = new Food('KFC', '200000000')


// console.log(toy)
// console.log(chicken)


// ========================


// var array = [1,2,3]
// var applyArray = [2,3,4,5]

// array.push.apply(array, applyArray)
// console.log(array);




// =============== SUMMARY ================


var person_1 = { name: 'Tung', age: 21 }
var person_2 = { name: 'A', age: 22 }

function say(msg1, msg2) {
  console.log(msg1, this.name, this.age, msg2)
}

// bind
var person1_say = say.bind(person_1, 'hello', 'greeting')
var person2_say = say.bind(person_2, 'hello', 'greeting')
person1_say()
person2_say()


// call
say.call(person_1, 'hello', 'greeting')
say.call(person_2, 'hello', 'greeting')


// apply
say.apply(person_1, ['hello', 'greeting'])
say.apply(person_2, ['hello', 'greeting'])




