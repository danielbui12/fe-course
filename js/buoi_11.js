var a = {
	foo: 'bar'
}

var json_a = JSON.stringify(a)

console.log(a, typeof a)
console.log(json_a, typeof json_a)
console.log(JSON.parse(json_a))


var b = [12,23,45]
var json_b = JSON.stringify(b)

console.log(b, typeof b)
console.log(b, typeof json_b)
console.log(JSON.parse(json_b))



