import './App.css';
import TodoItem from './components/TodoItem'

function App() {
  const data = [
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
      isDeleted: true
    }
  ]

  return (
    <div className="App">
      {
        data.map((_data, index) => {
          return (
            <TodoItem key={index} data={_data} />
          )
        })
      }
    </div>
  );
}

export default App;
