import React from 'react'

// 'props' arg is going to relate to 'this' in app.js
export const TodoForm = (props) => (
	<form>
		<input type="text" 
		onChange={props.handlerInputChange} 
		value={props.currentTodo} />
	</form>
	)

