//  A func taking a fn and a bunch of arguments  ...args -> rest operator
//  args get bundled in an array.
//  binding the function (fn) without changing the context so null first as arg
//   then the spread  operator will  unpack the args  array back 
export const partial = (fn, ...args) => fn.bind(null, ...args)

// Using two functions as args and two arrow functions
//  ...args will block the arga in an array -> rest operator
//  ...args as a spread takes out the args back from the array
const _pipe = (fn1, fn2) => (...args) => fn2(fn1(...args))

// array of functions will reduced to one item
// reduce with one argument (without initial value )will take the 
// first to elements and pass them to pipe and return a function
// and so on until there is only one last function waiting to reicieve 
// the arguments.
export const pipe = (...functions) => functions.reduce(_pipe)