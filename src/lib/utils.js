//  A func taking a fn and a bunch of arguments  ...args -> rest operator
//  args get bundled in an array.
//  binding the function (fn) without changing the context so null first argument
//   then the spread  operator will  unpack the args array back 
export const partial = (fn, ...args) => fn.bind(null, ...args)

// Using two functions as args and two arrow functions
//  ...args will block the args in an array -> rest operator
//  ...args as a spread takes out the args back from the array
const _pipe = (f, g) => (...args) => g(f(...args))

// array of functions will reduced to one item
// reduce with one argument (without initial value )will take the 
// first to elements and pass them to _pipe and return a function
// and so on until there is only one last function waiting to receive 
// the arguments.
export const pipe = (...fns) => fns.reduce(_pipe)