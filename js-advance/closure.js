// closure: hàm trả về hàm khác


function a(param1, param2) {
  const result = param1 + param2

  return function (param3) {
    return result * param3;
  }
}

const closureFunction = a(1, 2)(3)
console.log(closureFunction)