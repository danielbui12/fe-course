import React, { useEffect, useState } from 'react';
import './App.css';
import classNames from 'classnames';

class TodoItem extends React.Component {
  render() {
    const { item } = this.props

    return (
      <div
        onClick={() => this.props.onItemClick(item)}
        className={classNames('todo-item', {
          'done': item.isDone
        })}
      >
        {item.title}
      </div>
    )
  }
}

function App() {
  const [newTodoItem, setNewTodoItem] = useState('')
  const [todoItems, setTodoItems] = useState([
        {
          id: 1,
          title: 'Cafe',
          isDone: false
        },
        {
          id: 2,
          title: 'Work',
          isDone: true
        },
        {
          id: 3,
          title: 'Watching movie',
          isDone: true,
        }
      ])

  const onItemClick = (item) => {
    const _todoItemIndex = todoItems.findIndex(_item => _item.id === item.id)
    const _todoItems = todoItems
    _todoItems[_todoItemIndex].isDone = !_todoItems[_todoItemIndex].isDone

    setTodoItems(_todoItems)
  }

  const onInputChange = (event) => {
    setNewTodoItem(event.target.value)
  }

  const onAddNewTodoItem = (event) => {
    if (event.keyCode === 13) {
      setTodoItems((prev) => ([
        {
          id: prev.length + 1,
          title: newTodoItem,
          isDone: false
        },
        ...prev
      ]))
      setNewTodoItem("")
    }
  }

  return (
    <div className='App'>
      <input 
        onChange={(event) => onInputChange(event)}
        value={newTodoItem}
        onKeyUp={(event) => onAddNewTodoItem(event)}
      />
      {
        todoItems.map((_item, index) => {
          return (
            <TodoItem onItemClick={(item) => onItemClick(item)} item={_item} key={index} />
          )
        })
      }
    </div>
  )
}

export default App;
