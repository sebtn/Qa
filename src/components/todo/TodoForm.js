import React from 'react'
import PropTypes from 'prop-types'

// 'props' arg is going to relate to 'this' in app.js
export const TodoForm = (props) => (
	<form onSubmit={props.handlerSubmit}>
		<input type="text" 
		onChange={props.handlerInputChange} 
		value={props.currentTodo} />
	</form>
	)

// check passing the correct types in the args
// use it for ensuring the re usability.
// Prevents use of wrong data type in properties
// Notice the difference syntax in PropTypes
// Each of the form receives two data types
// a function and a string
TodoForm.propType = {
	currentTodo: PropTypes.string.isRequired,
	handlerInputChange: PropTypes.func.isRequired,
	handlerSubmit: PropTypes.func.isRequired
}
