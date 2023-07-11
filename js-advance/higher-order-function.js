// higher order function: hàm học hàm
// higher order component

const isLoggedIn = false

function waitAndRun(callback, ms) {
  if (isLoggedIn === true) {
    setTimeout(() => callback('/dash-board'), ms)
  } else {
    setTimeout(() => callback('/login'), ms)
  }
}

function run(href_) {
  console.log('executed!', href_)
}

waitAndRun(run, 1000)
