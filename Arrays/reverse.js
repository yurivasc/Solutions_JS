var array1 = ['one', 'two', 'three'];

var reversed = array1.reverse();
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']