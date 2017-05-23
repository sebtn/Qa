import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Custom components importing from index.js
import {TodoForm, TodoList, Footer} from './components/todo'
// importing helpers
import {addTodo, generateId, findById, toggleCompleted, 
        updateTodo, removeTodo, filterTodos} from './lib/todoHelpers'
import PropTypes from 'prop-types'
// Refactor uses utils
// import {pipe, partial} from  './lib/utils'
// load todos from server now they are no longer hard coded
import {loadTodos, createTodo, saveTodo, deleteTodo} from './lib/todoService'

class App extends Component {
  // state = {
  //   todos: [],
  //   currentTodo:  ''
  // }
  constructor() {
    super() 
    // have object and array of objects of the things we want to change
    // Property initializer syntax. Create-react-app default with the functionality.
    // As result move the state out of the constructor, allow to get rid of the 
    // redundant binding of .this and the constructor, plus
    //  using arrow functions for  our own custom methods will scope and 
    //  bind .this.state and .this.setState
    this.state = {
      todos: [],
      currentTodo:  ''
    }
    // here we bind the this on the state and this on the render
    // correct context and scope, still inside the constructor
    // not using utils so no need to get rid of bounded this
    this.handlerInputChange = this.handlerInputChange.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this)
    this.handlerToggle = this.handlerToggle.bind(this)
    this.handlerRemove = this.handlerRemove.bind(this)
  }
  /*-------------- 
      CONTEXT 
  ---------------*/
  // For routes and link handlers access
 static contextTypes = {
  route: PropTypes.string,
 }

 /*Component life cycle*/
 componentDidMount = () => {
/*  loadTodo method return a promise, which is resolve to 
    the array of todos the reason is a response is already 
    called on the jsonObject. Use then to load the [] */
  loadTodos()
    .then(todos => this.setState({todos}))
 }

  /*----------------------------
    CUSTOM METHODS handlers
   ----------------------------*/
  handlerRemove = (id, event) => {
    event.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id) 
    this.setState ({todos: updatedTodos})
    deleteTodo(id)
      .then(() => this.showTempMessage('ToDo removed'))
  }

  handlerToggle = (id) => {
    // Final refactor
    // get updated item from the current []
    // const getToggledTodo = pipe(findById, toggleCompleted) 
    // const updated = getToggledTodo(id, this.state.todos)
    // const getUpdatedTodos = partial(updateTodo, this.state.todos)
    // const updatedTodos = getUpdatedTodos(updated)

    // refactor using pipe, the idea was to remove the const
    // const getUpdatedTodos = pipe(findById, getToggledTodo, partial(updateTodo, this.state.todos)) 
    // const updatedTodos = getUpdatedTodos(id, this.state.todos)
    // const updated = getToggledTodo(id, this.state.todos)

    // find a specific todo by id traversing the current todos list
    // find the updated item using id and current []
    const todo = findById(id, this.state.todos) 
    // toggled version of the specific todo
    const toggled = toggleCompleted(todo) 
    const updatedTodos = updateTodo(this.state.todos, toggled)
    this.setState({todos: updatedTodos})
    saveTodo(toggled)
    // to handle response do the
      .then(() => this.showTempMessage('ToDo updated')) 
  }

  handlerSubmit = (event) => {
    event.preventDefault()
    const newId = generateId()
    const  newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const updateTodosList = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updateTodosList,
      currentTodo: '',
      errorMessage: ''
    })
    // using the post request
    createTodo(newTodo)
    // set a message prop in todo state
      .then(() => this.showTempMessage('A new thing ToDo has been added'))
  }
  // Set and use the prop message to remove the after 3 secs
  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 3500)
  }

  showTempErrorMessage = (msg) => {
    this.setState({errorMessage: msg})
    setTimeout(() => this.setState({errorMessage: ''}), 3500)
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()
    this.showTempErrorMessage('Please add something ToDo... ' )
  }

  handlerInputChange = (event) => {
    // passing the object defined "currenTodo"  .target will 
    // fetch element triggering the event and  .value pass it's value
    this.setState ({ currentTodo: event.target.value })
  }

  render() {
    const submitHandler = this.state.currentTodo ? 
                          this.handlerSubmit : this.handleEmptySubmit
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>A nice ToDO app built with React.js</h2> 
        </div>
        <div className="App-todo">
      {/*&&  -> Means: and if its true do  something...*/}
        {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
        {this.state.message && <span className="success">{this.state.message}</span>}
          <TodoForm handlerInputChange={this.handlerInputChange}
          // Note the lack if this, {const} instead of {this.func}
          // it depends if the form is empty or not
          handlerSubmit={submitHandler} 
          currentTodo={this.state.currentTodo} /> 
          <Footer />
          <TodoList handlerToggle={this.handlerToggle} todos={displayTodos} 
          handlerRemove={this.handlerRemove} />   
        </div>       
      </div>
    );
  }
}

export default App;
