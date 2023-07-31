import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  /**
   * componentDidUpdate
   * componentDidMount
   * componentWillUnmount
   */
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

export default App;
