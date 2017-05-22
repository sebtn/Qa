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

// Load todo to db
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
	}).then(res => res.json()) // return promise
}