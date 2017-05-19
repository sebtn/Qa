import React from 'react'
import {TodoItem} from './TodoItem'

// Everything that was .this || this.state before 
// re factor will get .props after re factor (ie: here)
// this is because dealing w/ stateless components 
export const TodoList = (props) => {
	return (
		<div className="todo-list"> 
			<ul>
			{/*refactor to recreate todoElelemt an link it 
			to todoItem.js, the idea is to link props from todo list and
			todo eleement*/}
			  {props.todos.map(todoElement => <TodoItem key={todoElement.id} {...todoElement} />) }
			</ul>
		</div> 
	)}  