import React from 'react'
import PropTypes from 'prop-types'


export const TodoItem = (props) => {
	return (
		// Assign a key={props.id} inside <li> will help react perform better 
		// in the refactor we have moved the key to the TodoList.js
		// as a key for <TodoItem key={todoElement.id} />
		<li>
		  <input type="checkbox" 
		  defaultChecked={props.isComplete} /> 
		  {props.name} 
		</li>
	)}
	// Each of he todo item receives three data types:
	// name, id , isComplete
	TodoItem.propTypes = {
		isComplete: PropTypes.bool,
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	}