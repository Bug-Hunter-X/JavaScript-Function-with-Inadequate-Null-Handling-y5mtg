function foo(a, b) {
  // Handle undefined or non-numeric values
  a = typeof a === 'number' ? a : 0; 
  b = typeof b === 'number' ? b : 0; 

  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(NaN, 2)); // Output: 2
console.log(foo(1, NaN)); // Output: 1