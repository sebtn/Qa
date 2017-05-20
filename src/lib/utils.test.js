import {partial, pipe} from './utils'

const add  = (a,  b) => a + b
const addThree = (a,  b, c) => a + b + c
const inc = (num) => num +  1
const db = (num) => num * 2


// Test 1
test('partial is a function which applies the first argument ahead of time', () => {
	const inc = partial(add , 1)
	const result = inc(2)
	expect(result).toBe(3)
})

// Test 2
test('partial is a function which applies multiple arguments ahead of time', () => {
	const inc = partial(addThree , 1, 3)
	const result = inc(2)
	expect(result).toBe(6)
})

// Test 3
// 
test('pipe is a function which  passes the result of inc to db', () => {
	const pipeline = pipe(inc, db) // db(inc(2)) -> function inside a function
	const result = pipeline(2)
	expect(result).toBe(6)
})

// Test 4
test('pipe is a function which  passes the result of inc to db', () => {
	const pipeline = pipe(db, inc) // inc(db(2)) -> function inside a function
	const result = pipeline(2)
	expect(result).toBe(5)
})

// Test 5
test('Verify pipe method work with more than 2 functions  ', () => {
	const pipeline = pipe(add, inc, db, inc) // ---> inc( db ( inc ( add(2,3) ) ) )
	const result = pipeline(1, 2)
	expect(result).toBe(9)
})