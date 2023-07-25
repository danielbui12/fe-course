import React from 'react';
import './App.css';
import classNames from 'classnames';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       favoritecolor: "red" 
//     };
//     this.changeColor = this.changeColor.bind(this)

//     console.log('constructor');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate')
//   }

//   render() {
//     console.log('render');
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Container />
      </div>
    )
  }
}

export default App;
