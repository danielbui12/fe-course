import React from 'react';
import './App.css';
import classNames from 'classnames';

class Accordion extends React.Component {
  render() {
    const { heading, children } = this.props
    
    return (
      <div className='accordion'>
        <h1>{heading}</h1>

        <div className='content'>
          {children}
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Accordion 
          heading="This is heading"
        >
          <div>
            "This is content"
          </div>
        </Accordion>
      </div>
    )
  }
}

export default App;
