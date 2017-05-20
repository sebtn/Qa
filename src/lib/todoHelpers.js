// function to add things in the list
export const addTodo = (list, item) => {
	// list.push(item) -> push mutates lists
	// concat will add the new item by
	// creating a new array and then return it
	// that way no mutation  of list is done.
	return list.concat(item)
}

// Rnd number to generate id
export const generateId = () => Math.floor(Math.random()*100000) 

// array.find( passing callback using object, compare the id of the 
// object (object.id) as the same as the id passed as arg
export const findById  =  (id, list) => list.find(item => item.id === id)

// Take a todo object, from the result take the spread operator 
// to pass all the props of the object, the overwrite the isComplete flag,
//  with the opposite.
//  In test five we compare that the two elements are different. 
//  So no mutation has been done.
export const toggleCompleted = (todo) => ({...todo, 
	isComplete : !todo.isComplete
})

export const updateList = (list, updatedItem) => {
	// finding  index for a given item in the list, where the one
	//  being requested  is the same as the one replacing it
	//  item.id === updatedItem.id
	const updatedItemIndex = list.findIndex (item => 
		item.id === updatedItem.id)
	return [
	//  Take the existing  ...list and slicing it to fit the updatedItem
		...list.slice(0,  updatedItemIndex), 
		updatedItem,
		...list.slice(updatedItemIndex + 1)
	] 
}

export const removeTodo = (list, id) =>  {
	// Beacuse list is an array of objects idem.id is can be used to fetch
	// the prop id from any obj inside the array, in this case id must match the passed id
	const wantedItem = list.findIndex(item => item.id === id)
	return [
		...list.slice(0, wantedItem),
		...list.slice(wantedItem + 1)
	]
}
