import React from 'react'
import classnames from 'classnames'

class TodoItem extends React.Component {
  
  render() {
    const { data } = this.props;

    return (
      <div 
        id={data.id} 
        className={classnames({
          'done': data.isDone,
          // 'deleted': data.isDeleted
        })}
      >
      {
        !data.isDeleted && data.title
      }
      </div>
    )
  }
}

export default TodoItem