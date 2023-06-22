var ulEl = document.getElementById("todo-list")

var todoStorageKey = 'todo'
var numbersOfTodo = 0



///////// LOAD FROM LOCAL STORAGE //////////////
// getItem(key)
// setItem(key, value)
// ['todo1', 'todo2']
var oldData = window.localStorage.getItem(todoStorageKey)
if (oldData) {
  oldData = JSON.parse(oldData)
  for (var _data of oldData) {
    createTodoItem(_data)
  }
}
/////////////////////////////////////////////

function onSubmit(event) {
  event.preventDefault();
  var input = document.getElementById('todo-input')
  if (!input.value) return


  ///////// SAVE TO LOCAL STORAGE //////////////
  var oldData = window.localStorage.getItem(todoStorageKey)
  if (oldData) {
    oldData = JSON.parse(oldData)
    oldData.push(input.value)
    window.localStorage.setItem(todoStorageKey, JSON.stringify(oldData))
  } else {
    window.localStorage.setItem(todoStorageKey, JSON.stringify([input.value]))
  }
  /////////////////////////////////////////////


  createTodoItem(input.value)
  input.value = ''
}

function createTodoItem(value) {
  var liEl = document.createElement('li')

  liEl.id = 'todo-' + numbersOfTodo
  var spanEl = document.createElement('span')
  spanEl.innerHTML = value
  var btnEl = document.createElement('button')
  btnEl.innerHTML = '&#9874;'
  btnEl.id = 'delete-todo-' + numbersOfTodo
  btnEl.onclick = deleteItem

  liEl.append(spanEl, btnEl)
  ulEl.appendChild(liEl)
  numbersOfTodo++;
}

function deleteItem(event) {
  var liId = event.target.id.replace('delete-', '')
  var spanEl = document.querySelector('li#' + liId +  ' span') 
  document.getElementById(liId).remove()


  ///////// REMOVE FROM LOCAL STORAGE //////////////
  var oldData = window.localStorage.getItem(todoStorageKey)
  oldData = JSON.parse(oldData)
  oldData = oldData.filter(function (_data) {
    return _data !== spanEl.textContent
  })
  window.localStorage.setItem(todoStorageKey, JSON.stringify(oldData))
  /////////////////////////////////////////////

}



/**
 * - localStorage: lưu mãi mãi
 * - sessionStorage: lưu trong chu kỳ phiên (tắt tab đi sẽ clear)
 * - cookie: chỉ lưu được 1 thời gian
 */

















