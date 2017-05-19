import {addTodo} from './todoHelpers'

it('adds a todo item to the list', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 1, name: 'one', isComplete:false}
	]
	const newTodo = {id: 1, name: 'one', isComplete:false}
	const expected = [
		{id: 1, name: 'one', isComplete:false},
		{id: 1, name: 'one', isComplete:false},
		{id: 1, name: 'one', isComplete:false}
	]
	
	const result = addTodo(beginTodos, newTodo)

	expect(result).toEqual(expected)
})

it('addTodo should not mutate the list data', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 1, name: 'one', isComplete:false}
	]
	const newTodo = {id: 1, name: 'one', isComplete:false}
	const expected = [
		{id: 1, name: 'one', isComplete:false},
		{id: 1, name: 'one', isComplete:false},
		{id: 1, name: 'one', isComplete:false}
	]
	
	const result = addTodo(beginTodos, newTodo)

expect(result).not.toBe(beginTodos)
})