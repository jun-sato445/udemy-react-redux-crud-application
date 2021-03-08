import React, { Component } from 'react';
import './App.css';

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
    { name: "Noname"}
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

User.defaultProps = {
  age:1
}

export default App;
