import React, { Component } from 'react';
import './App.css';

//function App() {
//  return (
//    <div>Hello world!!</div>
//  );
//}

class App extends Component {
  render() {
    return (
    <React.Fragment>
    <label htmlFor = "bar">bar </label>
    <input type="text" onClikck={() => {console.log("Hi!!")}} />
    </React.Fragment>
    )
  }
}

export default App;
