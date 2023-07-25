import React from 'react';
import './App.css';

class List extends React.Component {
  render() {
    const { data, render } = this.props
    return (
      <div>
        {data.map(_data => render(_data))}
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    const dataList = [
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

    return (
      <>
      {/* render props */}
        <List 
          data={dataList} 
          render={(_data) => {
            return <div>{_data.title}</div>
          }} 
        />
      </>
    );
  }
}

export default App;
