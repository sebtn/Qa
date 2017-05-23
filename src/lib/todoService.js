const baseUrl = 'http://localhost:8080/todos'

// API loading
// GET form db
export const loadTodos = () => {
	//get a promise back using fetch
	return fetch(baseUrl)
	// fetch response object
	// get new promise with only the json formatted data
				.then(res => res.json())
}

// Load todo to db... POST
export const createTodo = (todo) => {
	// by default fetch is a get request
	// use post means a modification to the req
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'content-type': 'application/json' 
		},
		body: JSON.stringify(todo)
	}).then(res => res.json()) // return promise on response
}

// load a change to the server... PUT 
export const saveTodo = (todo) => {
	// used string interpolation to append todo.id
	// since id are changing we want flexible strings
	return fetch(`${baseUrl}/${todo.id}`,  {
		method: 'PUT',
		headers: {
			'Accept': 'application/json', 
			'content-type': 'application/json' 
		},
		body: JSON.stringify(todo)
	}).then(res => res.json()) //return promise on response
}

// delete an item from the db
export const deleteTodo = (id) => {
	return fetch(`${baseUrl}/${id}`,  {
		method: 'DELETE',
		headers:{
		 'Accept': 'application/json',
		 'content-type': 'application/json'
		} // the body wont be passed, no need to do anything 
	}) //additional with the response so no promise return   
}
