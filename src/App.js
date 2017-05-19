import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Custom components importing from index.js
import {TodoForm, TodoList} from './components/todo'


class App extends Component {

  constructor() {
    super() 
    // have object and array of objects of the things we want to change
    this.state = {
      todos: [
        {id: 1, name: 'JSx', isComplete: false},
        {id: 2, name: 'Learn Morest', isComplete: true},
        {id: 3, name: 'Copy this.this', isComplete: false},
        {id: 4, name: 'ship 2.0', isComplete: false}
      ],
      currentTodo:  ''
    }
    // here we bind the this on the state and this on the render
    // correct context and scope, still inside the constructor
    this.handlerInputChange = this.handlerInputChange.bind(this)
  }

  handlerInputChange (event) {
    // passing the object defined "currenTodo"  .target will 
    // fetch element triggering the event and  .value pass it's value
    this.setState ({ currentTodo: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-todo">
          <TodoForm handlerInputChange={this.handlerInputChange} 
          currentTodo={this.state.currentTodo} /> 
          <TodoList todos={this.state.todos} /> 
        </div>       
      </div>
    );
  }
}

export default App;
