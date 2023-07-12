// function Animal(name) {
//   this.name = name
// }

// Animal.prototype.run = function() {
//   console.log('running...')
// }

class Animal {
  constructor(name) {
    this.name = name;
  }

  // method
  run() {
    console.log('running...')
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  run() {
    super.run();
    console.log('Cat is running...')
  }

  speak() {
    console.log('Meow...', this.age)
  }

  static sayHello() {
    console.log(this.name, 'hello');
  }
}

const cat = new Cat('Tom', 1)
console.log(cat.name)
cat.run();
cat.speak();
Cat.sayHello();
