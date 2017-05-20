import React from 'react'
import PropTypes from 'prop-types'
// go up two levels
import {partial} from '../../lib/utils'


export const TodoItem = (props) => {
	// const handlerToggle = () => props.handlerToggle(props.id)
	// 
	// Replace the arrow function, using bind
	// passing null because the context wont be reseted, partially apply the func
	// nadleToggle is a function which knows the first argument ' props.id ' -> id of the item
	// const handlerToggle = props.handlerToggle.bind(null, props.id)

	// re factor the const with  {partial} from utils.js. 
	// move bind out of the way
	// pass a specific id into handlers with partial
	// partially loads the handlers with props.id
	const handlerToggle = partial(props.handlerToggle, props.id)
	const handlerRemove= partial(props.handlerRemove, props.id)

	return (
		// Assign a key={props.id} inside <li> will help react perform better   
		// as a key for <TodoItem key={todoElement.id} />
		<li>
			<span className="delete-item"><a href="#" onClick={handlerRemove}>X</a></span>
			{/*handler toogle takes props.id as argument onchange default at an empty
			object so we need the arrow funcition*/}
			  <input type="checkbox"  onChange={handlerToggle}
			  checked={props.isComplete} /> {props.name}  
		</li>
	)}
	// Each of he todo item receives three data types:
	// name, id , isComplete
	TodoItem.propTypes = {
		isComplete: PropTypes.bool,
		name: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	}