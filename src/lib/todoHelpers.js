// function to add things in the list
export const addTodo = (list, item) => {
	// list.push(item) -> push mutates lists
	// concat will add the new item by
	// creating a new array and then return it
	// that way no mutation  of list is done.
	return list.concat(item)
}

// Rnd number to generate id
export const generateNumber = () => Math.floor(Math.random()*100000) 