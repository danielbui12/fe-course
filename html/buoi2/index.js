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

function createBook(bookData) {
  var ulEl = document.getElementById("book-list")
  var liEl = document.createElement('li')

  liEl.id = 'book-' + bookData.id
  var spanEl = document.createElement('span')
  spanEl.innerHTML = bookData.book_name + ' of ' + bookData.author + ' published at ' + bookData.created_at + ' .Price: ' + bookData.price + '$'
  var btnDeleteEl = document.createElement('button')
  btnDeleteEl.innerHTML = '&#9874;'
  btnDeleteEl.id = 'delete-book-' + bookData.id
  btnDeleteEl.onclick = deleteItem

  // var btnDeleteEl = document.createElement('button')
  // btnDeleteEl.innerHTML = '&#9874;'
  // btnDeleteEl.id = 'delete-book-' + bookData.id
  // btnDeleteEl.onclick = deleteItem

  liEl.append(spanEl, btnDeleteEl)
  ulEl.appendChild(liEl)
  // numbersOfTodo++;
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