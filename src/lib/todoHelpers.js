export const addTodo = (list, item) => {
	// list.push(item) -> push mutates lists
	// concat will add the new item into a new array and return it
	return list.concat(item)
}