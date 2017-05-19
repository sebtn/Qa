import React from 'react'
import {TodoItem} from './TodoItem'
import PropTypes from 'prop-types'


// Everything that was .this || this.state before 
// will get .props after re factor.
// this is because dealing w/ stateless components 
export const TodoList = (props) => {
	return ( 
		<div className="todo-list"> 
			<ul>
			{/*refactor to recreate todoElelemt and link it 
			to todoItem.js, the idea is to link props from todo list and
			todo element, map every prop from the todos array into each 
			todoElement*/}
			  { props.todos.map( todoElement => <TodoItem key={todoElement.id} 
			  	{...todoElement} /> ) 
				}
			</ul>
		</div> 
	)}  
	// Define the propType for the component
	// Each of the TodoList is an array so one data type
	TodoList.propType = {
		todos: PropTypes.array.isRequired
	}
