import {addTodo} from './todoHelpers'

// Test 1
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

// Test 2
it('addTodo should not mutate the existing list array', () => {
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