import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      todos: [
        {id: 1, name: 'JSx', isComplete: false},
        {id: 2, name: 'Learn Morest', isComplete: true},
        {id: 3, name: 'Copy this.this', isComplete: false},
        {id: 4, name: 'ship 2.0', isComplete: false}
      ],
      currentTodo:  ''
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-todo">
          <form>
            <input type="text" value={this.state.currentTodo}/>
          </form>
          <div className="todo-list"> 
          <ul>
            {this.state.todos.map(todoElement =>
              //using a key inside <li> will help react perform better 
              <li key={todoElement.id}>
                <input type="checkbox" defaultChecked={todoElement.isComplete}/> {todoElement.name} 
              </li>
            )}
          </ul>
          </div> 
        </div>       
      </div>
    );
  }
}

export default App;
