// --> Arrow Functions

// [1] Basic Syntax  (Expli)

const add = (a, b) => (a + b);
console.log(add(2, 3));  // 5

// [2] Single Parameter Without Parentheses

const square = x => x * x;
console.log(square(4));  // 16

// [3] Multiline Arrow Functions

const sum = (a, b) => {
    const result = a + b;
    return result;
};
console.log(sum(2, 3));  // 5

// [4] Lexical `this` Binding

class Person {
    constructor(name) {
        this.name = name;
        this.greet = () => {
            console.log('Hello, ' + this.name);
        };
    }
}
  
  const john = new Person('John');
  john.greet();  // 'Hello, John'

// --> Default Parameters

function greet(name = 'Guest') {
    return `Hello, ${name}`;
  }
  
  console.log(greet());  // 'Hello, Guest'
  console.log(greet('Yovan'));  // 'Hello, Yovan'
  
//  --> Rest Parameters(...) -- use where no of argument is not fix

function SUM(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(SUM(1, 2, 3, 4));  // 10

// --> Spread Operator

const numbers = [1, 2, 3];
const add1 = (a, b, c) => a + b + c;
console.log(add1(...numbers));  // 6

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];
console.log(combinedArray);  // [1, 2, 3, 4, 5, 6]

// --> Destructuring

// [1] Array Destructuring

const Sum = ([a, b]) => a + b;
console.log(Sum([1, 2]));  // 3
console.log(Sum([1, Sum([2, 3])])); // 6

// [2] Object Destructuring

const greet1 = ({ firstName, lastName }) => `Hello, ${firstName} ${lastName}`;
const person5 = { firstName: 'John', lastName: 'Doe' };
console.log(greet1(person5));  // 'Hello, John Doe'

// --> Async/Await

// [1] Async Function

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data: ', error);
  }
}
// with out try and catch also work it for the hendle the error 
// fetchData().then(data => console.log(data));
fetchData().then(data => {
  if (data) {
    console.log(data);
  }
});

// --> Generator Functions

// [1] Basic Generator Function

function* generatorFunction() {
  yield 'Hello';
  yield 'World';
}

const generator = generatorFunction();
console.log(generator.next().value);  // 'Hello'
console.log(generator.next().value);  // 'World'
console.log(generator.next().value);  // undefined

// [2] Iterating with Generators

function* idGenerator() {
  let id = 0;
  while (true) {
    yield id++;
  }
}

const ids = idGenerator();
console.log(ids.next().value);  // 0
console.log(ids.next().value);  // 1
console.log(ids.next().value);  // 2

// --> Function Methods

// [1] Function.prototype.bind()

const Module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = Module.getX;
console.log(unboundGetX()); // undefined

// const boundGetX = unboundGetX.bind(Module);
const boundGetX = Module.getX.bind(Module);
console.log(boundGetX()); // 42

// [2] Function.prototype.call() and Function.prototype.apply()

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Yovan' };

greet.call(person, 'Hello', '!');  // 'Hello, Yovan!'
greet.apply(person, ['Hi', '...']);  // 'Hi, Yovan...'
// apply no of arguments is unknown

// --> new

// [1] Optional Chaining (?.)

const user = { name: 'Alice', address: { city: 'Wonderland' } };
console.log(user?.address?.city);  // 'Wonderland'
console.log(user?.contact?.phone);  // undefined

// [2] Nullish Coalescing Operator (??)

const name = null ?? 'Guest';
console.log(name);  // 'Guest'

// Immediately Invoked Function Expressions (IIFE)

(function DB(){
  // named IIFE
  console.log(`DB connected`);
})();

( (name) => {
  console.log(`DB connected ${name}`);
})('yovan')

// --> comasepreter 

function f1() {
  console.log("hey..");
  return 5;
}

function f2() {
  console.log("bey...");
  return 2;
}

let x = (f1() , f2());  // exceute both function but return the value of last one (here f2())
console.log(x);