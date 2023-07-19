interface IPet {
  getName(): string;
}
class Pet implements IPet {
  constructor(readonly name: string) {};

  public getName(): string {
    return this.name;
  }

  private _getName(): string {
    return this.name;
  }

  sayHello() {
    console.log(this._getName(), 'hello!'); 
  }
}

const cat = new Pet('Tom')
console.log(cat.getName())
cat.sayHello();