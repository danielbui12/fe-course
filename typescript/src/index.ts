import { log as logFunction } from './log'
import logDefault from './log'

// alias

/**
		number: integer float
	string: "", ''
	object: { key: value },
	array: [ 1, 2.3, 3, "4", 5, 7, { foo: 'bar' }]
	undefined
	null
	function
	boolean: false true
*/


let a: number = 1
let b: string = 'string'
let c: object = { foo: 'bar' }
let d = undefined;
let e: number[] = [1, 2, 3, 4]
let f = null
let g: boolean = false

let h: (a: string) => number = (a: string) => {
  return parseInt(a);
}

logFunction(h('1'))

function k(a: string): number {
  return parseInt(a);
}


logDefault(k('2'))

