// --> Types of Loop

// 1. for Loop
// for (initialization; condition; increment) {
//     // code block to be executed
//   }
  
// 2. while Loop
// while (condition) {
//     // code block to be executed
//   }
  
// 3. do...while Loop
// do {
//     // code block to be executed
//   } while (condition);
  
// 4. for...in Loop
// for (key in object) {
//     // code block to be executed
//   }

  const person = { name: 'Alice', age: 25, city: 'Wonderland' };
  for (let key in person) {
    console.log(key + ': ' + person[key]);
    // Outputs:
    // name: Alice
    // age: 25
    // city: Wonderland
  }
  
// 5. for...of Loop
// for (variable of iterable) {
//     // code block to be executed
//   }

  const array = ['Koy', 'Bob', 'Moj'];
for (let value of array) {
  console.log(value);  // Outputs Koy, Bob, Moj
}

// --> Break and Continue

console.log('Breack'); // Terminates the loop and transfers control to the statement following the loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);  // Outputs 0, 1, 2, 3, 4
  }
console.log('Continue'); // Skips the current iteration and proceeds to the next iteration of the loop
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);  // Outputs 0, 1, 2, 3, 4, 6, 7, 8, 9
  }
  
// --> Nested Loops
// Loops can be nested inside other loops to handle more complex iterations.

// --> Looping through Arrays

// [1] for 
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// [2] for....of 
for (let value of arr) {
  console.log(value);
}

// [3] forEach
arr.forEach( (value) => {
    console.log(value);
} )

// --> Looping through Objects

// [1] for...in

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + ': ' + obj[key]);
  }
}

// [2] Object.keys()

Object.keys(obj).forEach(key => {
  console.log(key + ': ' + obj[key]);
});

// [3] Object.entries()

for (const [key, value] of Object.entries(obj)) {
  console.log(key + ': ' + value);
}


// --> Methods

// [1] forEach() // not return change in orignal 

// array.forEach(callback(currentValue, index, array) {
//     // action to perform
//   }, thisArg);

arr.forEach( (value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

// [2] map()  - return new array

// const newArray = array.map(callback(currentValue, index, array), thisArg);

const doubled = arr.map(value => value * 2);
console.log(doubled);  // Outputs [2, 4, 6, 8, 10]

// [3] filter() - Return true to keep the element, false otherwise.

// const newArray = array.filter(callback(element, index, array), thisArg);

const evens = arr.filter( (value) => value % 2 === 0 );
console.log(evens);  // Outputs [2, 4]

// [4] reduce() - resulting in a single output value

// const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);

const sum = arr.reduce( (acc, value) => acc+ value, 0);
console.log(sum);  // Outputs 15

// [5] some() - at least one element in the array passes the test implemented

// const result = array.some(callback(element, index, array), thisArg);

const hasEven = arr.some( (value) => value % 2 === 0);
console.log(hasEven); // Outputs true

// [6] every() -  all elements in the array pass the test implemented

// const result = array.every(callback(element, index, array), thisArg);

const allEven = arr.every(value => value % 2 === 0);
console.log(allEven);  // Outputs false

// [7] find() -  If no values satisfy the testing function, undefined is returned.
//            -   returns the value of the first element in the array that satisfies the provided testing
//const value = array.find(callback(element, index, array), thisArg);

const firstEven = arr.find( (value) => value % 2 === 0);
console.log(firstEven); // Outputs 2

// [8] findIndex() - If no elements satisfy the testing function, -1 is returned
//                 - returns the index of the first element in the array that satisfies the provided testing function

// const index = array.findIndex(callback(element, index, array), thisArg);

const firstEvenIndex = arr.findIndex(value => value % 2 === 0);
console.log(firstEvenIndex);  // Outputs 1

// [9] flatMap() - first maps each element using a mapping function, then flattens the result into a new array

// const newArray = array.flatMap(callback(currentValue, index, array), thisArg);

const result = arr.flatMap( value => [value, value * 2])
console.log(result); // Outputs [1, 2, 2, 4, 3, 6, 4, 8

// [10] reduceRight() - applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value

// const result = array.reduceRight(callback(accumulator, currentValue, index, array), initialValue);

const results = arr.reduceRight( (acc, value) => acc + value, 0);
console.log(results);

// [11] sort()

const arr1 = [5,4,3,2,1]
const abc = arr1.sort();
console.log(abc);

// [12] includes()

console.log(arr.includes(1)); // true
