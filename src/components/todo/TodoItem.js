import React from 'react'

export const TodoItem = (props) => {
	return (
		// Assign a key={props.id} inside <li> will help react perform better 
		// in the refactor we hav moved the key to the TodoList.js
		// as a key for <TodoItem key={todoElement.id} />
		<li>
		  <input type="checkbox" 
		  defaultChecked={props.isComplete} /> 
		  {props.name} 
		</li>
	)}