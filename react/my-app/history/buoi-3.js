import React from 'react';
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

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newTodoItem: '',
      todoItems: [
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
      ]
    }
  }

  onItemClick(item) {
    const _todoItemIndex = this.state.todoItems.findIndex(_item => _item.id === item.id)
    const _todoItems = this.state.todoItems
    _todoItems[_todoItemIndex].isDone = !_todoItems[_todoItemIndex].isDone

    this.setState({
      ...this.state,
      todoItems: _todoItems
    })
  }

  onInputChange(event) {
    this.setState({ newTodoItem: event.target.value })
  }

  onAddNewTodoItem(event) {
    if (event.keyCode === 13) {
      this.setState({
        todoItems: [
          {
            id: this.state.todoItems.length + 1,
            title: this.state.newTodoItem,
            isDone: false
          },
          ...this.state.todoItems
        ],
        newTodoItem: ""
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <input 
          onChange={(event) => this.onInputChange(event)}
          value={this.state.newTodoItem}
          onKeyUp={(event) => this.onAddNewTodoItem(event)}
        />
        {
          this.state.todoItems.map((_item, index) => {
            return (
              <TodoItem onItemClick={(item) => this.onItemClick(item)} item={_item} key={index} />
            )
          })
        }
      </div>
    )
  }
}

export default App;
