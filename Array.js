// -->  Creating Arrays

// [1] Using Array Literals
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);

// [2] Using the Array Constructor
let fruit = new Array('apple', 'banana', 'cherry');
console.log(fruit);

// [3] Empty Arrays
let emptyArray = [];
let emptyArray2 = new Array();
console.log(emptyArray2);

// [4] Predefined Length
let predefinedLengthArray = new Array(10);  // Creates an array with 10 undefined slots
console.log(predefinedLengthArray);

// --> Accessing and Modifying Array Elements

// [1] Accessing Elements
console.log(fruits[0]);

// [2] Modifying Elements
fruits[1] = 'blueberry';
console.log(fruits);  // ['apple', 'blueberry', 'cherry']

// --> Array Properties and Methods

// [1] Length Property
console.log(fruits.length);   // 3

// [2] Push and Pop
fruits.push('date');  
console.log(fruits);  // ['apple', 'banana', 'cherry', 'date']

let lastFruit = fruits.pop();  
console.log(lastFruit);  // 'date'
console.log(fruits);  // ['apple', 'banana', 'cherry']

// [3] Shift and Unshift(Push)
fruits.unshift('avocado');  
console.log(fruits);  // ['avocado', 'apple', 'banana', 'cherry']

let firstFruit = fruits.shift(); 
console.log(firstFruit);  // 'avocado'
console.log(fruits);  // ['apple', 'banana', 'cherry']

// [4] Splice

// Removing elements
let removedFruits = fruits.splice(1, 1);  //(index , no of item)
console.log(removedFruits);  // ['banana']
console.log(fruits);  // ['apple', 'cherry']

// Adding elements
fruits.splice(1, 0,'blueberry', 'date');  // Adds 'blueberry' and 'date' at index 1
console.log(fruits);  // ['apple', 'blueberry', 'date', 'cherry']

// Replacing elements
fruits.splice(1, 2, 'blackberry');  // Replaces 2 elements at index 1 with 'blackberry'
console.log(fruits);  // ['apple', 'blackberry', 'cherry']

// [5] Slice

let subset = fruits.slice(0,2);  // (start index , no of element )
console.log(subset);

// [6] Concat

let moreFruits = ['elderberry', 'fig'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);  // ['apple', 'blackberry', 'cherry', 'elderberry', 'fig']

// [7] Join

let  fruitString = fruits.join(', ');
console.log( fruitString); // apple, blackberry, cherry

// --> Iterating Over Arrays

// [1] For Loop

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// [2] For...of Loop

for(let i of fruits) {
    console.log(i);
}

// [3] forEach Method

fruits.forEach((i,index) => {
    console.log(index, i);
});

// --> Array Searching and Filtering

// [1] IndexOf and LastIndexOf

let index = fruits.indexOf('cherry');
console.log(index);  // 2

let lastIndex = fruits.lastIndexOf('apple');
console.log(lastIndex);  // 0

// [2] Find and FindIndex

let found = fruits.find(i => i.startsWith('b'));
console.log(found);  // 'blackberry'

let foundIndex = fruits.findIndex(i => i.startsWith('c'));
console.log(foundIndex);  // 2

// [3] Filter

let filteredFruits = fruits.filter(i => i.length > 5);
console.log(filteredFruits);  // ['blackberry', 'cherry']

// --> Array Transformation

// [1] Map

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);  // ['APPLE', 'BLACKBERRY', 'CHERRY']

// [2] Reduce

let concatenatedFruits = fruits.reduce((acc, fruit) => acc + fruit, '-->');
console.log(concatenatedFruits);  // '-->appleblackberrycherry'

// --> Sorting and Reversing Arrays

// [1] sort

let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort();
console.log(numbers);  // [1, 1, 3, 4, 5, 9]

let sortedFruits = fruits.sort();
console.log(sortedFruits);  // ['apple', 'blackberry', 'cherry']

// [2] Custom Sort --> reverse sort
numbers.sort((a, b) => b - a);
console.log(numbers);  // [9, 5, 4, 3, 1, 1]

console.log(numbers.reverse());   //  [ 1, 1, 3, 4, 5, 9 ] 

// [3] Reverse

let reversedFruits = fruits.reverse();
console.log(reversedFruits);  // ['cherry', 'blackberry', 'apple']

console.log(numbers.reverse());   //  [ 9, 5, 4, 3, 1, 1 ]

// --> Additional Methods

// [1] Includes

let hasApple = fruits.includes('apple');
console.log(hasApple);  // true

// [2] Some and Every

let hasLongFruit = fruits.some(fruit => fruit.length > 5);
console.log(hasLongFruit);  // true

let allFruitsLong = fruits.every(fruit => fruit.length > 5);
console.log(allFruitsLong);  // false

// [3] Flat and FlatMap

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(1); // (no of remove array)
console.log(flatArray);  // [1, 2, 3, 4, 5, 6]

let flatMappedArray = fruits.flatMap(fruit => [fruit, fruit.length]);
console.log(flatMappedArray);  // ['apple', 5, 'blackberry', 10, 'cherry', 6]