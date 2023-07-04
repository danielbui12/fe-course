function onSubmit(event) {
  event.preventDefault();
  var inputsEl = event.target.querySelectorAll('input')
  var bookData = {}
  for (var i = 0; i < inputsEl.length; i++) {
    bookData[inputsEl[i].name] = inputsEl[i].value
  }
  bookData.created_at = new Date().toISOString()
  axios.post(
    'http://localhost:4001/book',
    bookData
  ).catch(function (err) {
    console.log(err);
    alert('create book failed')
  })
}
var updatingBookId 
function createBook(bookData) {
  var ulEl = document.getElementById("book-list")
  var liEl = document.createElement('li')

  liEl.id = 'book-' + bookData.id
  var spanEl = document.createElement('span')
  spanEl.innerHTML = bookData.book_name + ' of ' + bookData.author + ' published at ' + bookData.created_at + ' .Price: ' + bookData.price + '$'

  var btnDeleteEl = document.createElement('button')
  btnDeleteEl.innerHTML = '<iconify-icon icon="material-symbols:delete" ></iconify-icon>'
  btnDeleteEl.id = 'delete-book-' + bookData.id
  btnDeleteEl.onclick = deleteItem

  var btnUpdateEl = document.createElement('button')
  btnUpdateEl.innerHTML = '<iconify-icon icon="material-symbols:edit"></iconify-icon>'
  btnUpdateEl.id = 'edit-book-' + bookData.id
  btnUpdateEl.onclick = updateItem
  updatingBookId = bookData.id

  // var btnDeleteEl = document.createElement('button')
  // btnDeleteEl.innerHTML = '&#9874;'
  // btnDeleteEl.id = 'delete-book-' + bookData.id
  // btnDeleteEl.onclick = deleteItem

  liEl.append(spanEl, btnDeleteEl, btnUpdateEl)
  ulEl.appendChild(liEl)
  // numbersOfTodo++;
}

async function updateItem(event) {
  try {
    var bookId = event.target.id.replace('edit-book-', '')
    var response = await axios.get(
      'http://localhost:4001/book/' + bookId,
    )
    if (response.status === 200) {
      var formEl = document.getElementById('form-book')
      formEl.onsubmit = onUpdateItem

      var btnEl = formEl.querySelector('button')
      btnEl.innerHTML = 'Update'
      var bookData = response.data
      
      var bookDataKeys = Object.keys(bookData)
      for (var _key of bookDataKeys) {
        var _inputEl = formEl.querySelector('input[name="' + _key + '"]')
        if (_inputEl) {
          _inputEl.value = bookData[_key]
        }
      }
    } else {
      alert('get book failed')
    }
  } catch (error) {
    console.log(error);
    alert('get book failed')
  }
}

function onUpdateItem(event) {
  event.preventDefault();
  var inputsEl = event.target.querySelectorAll('input')
  var bookData = {}
  for (var i = 0; i < inputsEl.length; i++) {
    bookData[inputsEl[i].name] = inputsEl[i].value
  }
  bookData.created_at = new Date().toISOString()

  axios.patch(
    'http://localhost:4001/book/' + updatingBookId,
    bookData
  ).catch(function (err) {
    console.log(err);
    alert('update book failed')
  })
}

function deleteItem(event) {
  var bookId = event.target.id.replace('delete-book-', '')

  axios.delete(
    'http://localhost:4001/book/' + bookId,
  ).catch(function (err) {
    console.log(err);
    alert('create book failed')
  })
}

async function getBook() {
  try {
    var response = await axios.get('http://localhost:4001/book')
    if (response.status === 200) {
      for (var _book of response.data) {
        createBook(_book)
      }
    } else {
      alert('get book failed')
    }
  } catch (error) {
    alert('get book failed')
  }
}

getBook()