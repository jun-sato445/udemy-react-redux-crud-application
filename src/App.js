import React, { Component } from 'react';
import './App.css';
//import PropTypes from 'prop-types';

//function App() {
//  return (
//    <div>Hello world!!</div>
//  );
//}

//class App extends Component {
//  render() {
//    return (
//    <React.Fragment>
//    <label htmlFor = "bar">bar </label>
//    <input type="text" onClikck={() => {console.log("Hi!!")}} />
//    </React.Fragment>
//    )
//  }
//}

const App = () => (<Counter></Counter>)

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () =>{
    const currentCount = this.state.count
    this.setState({count: currentCount + 1})
  }

  handleMinusButton = () =>{
    const currentCount = this.state.count
    this.setState({count: currentCount - 1})
  }


  render() {
    return(
    <React.Fragment> 
    <div>count: {this.state.count }</div>
    <button onClick={this.handlePlusButton}>+1</button>
    <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}

export default App;
