import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

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

const App = () => {
  const profiles = [
    { name: "Taro", age: "10"},
    { name: "Hanako", age: "5"},
    { name: "Noname", age: "3"}
  ]
  return (
    <div>
      {
      profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index} />      
      })
      }
    </div>
  )
}

const User = (Props) => {
  return <div>Hi, I am {Props.name}! and {Props.age} years old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
