import {addTodo, findById, toggleCompleted, 
				updateTodo, removeTodo, filterTodos } from './todoHelpers'

// Test 1
test('adds a todo item to the list', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false}
	]
	const newTodo = {id: 3, name: 'three', isComplete:false}
	const expected = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]	
	const result = addTodo(beginTodos, newTodo)
expect(result).toEqual(expected)
})

// Test 2
test('addTodo should not mutate the existing list array', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false}
	]
	const newTodo = {id: 1, name: 'three', isComplete:false}
	const expected = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]	
	const result = addTodo(beginTodos, newTodo)
expect(result).not.toBe(beginTodos)
})

// Test 3
test('findById method should return the correct item from the array todos given an id', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]
	const expected =  {id: 2, name: 'two', isComplete:false}	
	const result = findById(2, beginTodos)
expect(result).toEqual(expected)
})

// Test 4
test('toggle todo should toggle the isComplete prop of the item', () => {
	const beginTodos = {id: 1, name: 'one', isComplete:false}
	const expected = {id: 1, name: 'one', isComplete:true}
	const result = toggleCompleted(beginTodos)
expect(result).toEqual(expected)
})

// Test 5
test('toogleCompleted should not mutate the original item', () => {
	const beginTodos = {id: 1, name: 'one', isComplete:false}
	const result = toggleCompleted(beginTodos)
expect(result).not.toBe(beginTodos)
})

// Test 6
test('UpdateTodo an item at a given id', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]
	const updatedItem =  {id: 2, name: 'two', isComplete:true}
	const expectedTodos =  [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:true},
		{id: 3, name: 'three', isComplete:false}
	]
	const result = updateTodo(beginTodos, updatedItem)
expect(result).toEqual(expectedTodos)			
})

// Test 7
test('The function updateTodo , should not mutate the original Array', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]
	const updatedItem =  {id: 2, name: 'two', isComplete:true}	
	const expectedTodos =  [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:true},
		{id: 3, name: 'three', isComplete:false}
	]
	const result = updateTodo(beginTodos, updatedItem)
expect(result).not.toBe(beginTodos)			
})

// Test 8
test('The removeTodo method should remove the item by id', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]
	const targetId = 2
	const expectedTodos =  [
		{id: 1, name: 'one', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]
	const result = removeTodo(beginTodos, targetId)
expect(result).toEqual(expectedTodos)			
})

// Test 9
test('The removeTodo method should not mutate beginTodos', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]
	const targetId = 2
	const expectedTodos =  [
		{id: 1, name: 'one', isComplete:false},
		{id: 3, name: 'three', isComplete:false}
	]
	const result = removeTodo(beginTodos, targetId)
expect(result).not.toBe(beginTodos)			
})

// Test 9
test('filterTodos should return all items for the root route', () => {
	const beginTodos = [
		{id: 1, name: 'one', isComplete:false},
		{id: 2, name: 'two', isComplete:true},
		{id: 3, name: 'three', isComplete:false}
	]
	const result = filterTodos(beginTodos, '/')
expect(result).toEqual(beginTodos)			
})








