import React from 'react';
import './App.css';

const DEFAULT_VALUE = {
  text: 'hello'
}

const CurrentContext = React.createContext(DEFAULT_VALUE)

class App extends React.Component {
  constructor() {
    super()
    this.state = DEFAULT_VALUE
  }

  toUpperCaseText() {
    this.setState({
      text: this.state.text.toUpperCase()
    })
  }

  render() {
    return (
      <CurrentContext.Provider 
        value={{
          ...this.state,
          toUpperCaseText: () => this.toUpperCaseText()
        }}
      >
        <App_ />
      </CurrentContext.Provider>
    )
  }
}

class App_ extends React.Component {
  static contextType = CurrentContext;

  render() {
    return (
      <div className='App'>
        {this.context.text}
        <Component1 />
      </div>
    )
  }
}

class Component1 extends React.Component {
  render() {
    return (
      <div>
       <Component2 />
      </div>
    )
  }
}


class Component2 extends React.Component {
  render() {
    return (
      <div>
        <Component3 />
      </div>
    )
  }
}

class Component3 extends React.Component {
  static contextType = CurrentContext;

  render() {
    return (
      <div>
        {this.context.text}
        <br/>
        <button
          onClick={this.context.toUpperCaseText}
        >Upper case text</button>
      </div>
    )
  }
}

export default App;
