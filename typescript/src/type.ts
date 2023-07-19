// type

type functionType = 'payable' | 'nonpayable'

interface functionABI {
  name: string;
  type: functionType
}


interface ABI {
  input: functionABI[],
  output: functionABI[]
}


class Even<T> {
  constructor (readonly num: T) { }

  check():boolean {
    return Number(this.num) % 2 === 0;
  }

  static staticCheck(num: number): boolean {
    return Number(num) % 2 === 0;
  }
}

const number = new Even<number>(123)
console.log(number.check())

console.log(Even.staticCheck(123))