// --> Creating Objects

// [1] Object Literals

let person = {
    firstname : 'yovan',
    lastname : 'chheta',
    age : 21,
    greet : function() {
        console.log('Hello, '+ this.firstname);
    }
};

// [2] Using the Object Constructor

let person1 = new Object();
person1.firstname = 'yovan';
person1.lastname = 'chheta';
person1.age = 21;
person1.greet = function () {
    console.log('Hello, '+ this.firstname);
}

// [3] Using Object.create()  

let personProto = {
    greet : function() {
        console.log('Hello, '+ firstname);
    }
};

let person2 = Object.create(personProto);
person2.firstname = 'yovan';
person2.lastname = 'chheta';
person2.age = 21;

// --> Accessing and Modifying Object Properties

// [1] Dot Notation

console.log(person.firstname);

// [2] Bracket Notation

console.log(person['lastname']);

// [3] Computed Property Names

let property = 'firstname';
console.log(person[property]);

// --> Adding and Deleting Properties

// [1] Adding 

person.middlename = 'Hareshbhai';

// [2] Deleting 

delete person.age;

// --> Checking for Properties
// Use in when you want to check if a property is present in the object or its prototype chain.
// Use hasOwnProperty when you want to check if the property is defined directly on the object itself, not inherited from its prototype.
// [1]  Using the in Operator

console.log('firstname' in person);
console.log('age' in person);
console.log('toString' in person);

// [2] Using hasOwnProperty

console.log(person.hasOwnProperty('firstname'));
console.log(person.hasOwnProperty('age'));
console.log(person.hasOwnProperty('toString'));

// --> Enumerating Properties

// [1] For...in Loop

for(let key in person) {
    if(person.hasOwnProperty(key)){
        console.log(key + ': ' + person[key]);
    }
}

// [2] Object.keys()

let keys = Object.keys(person);
console.log(keys);

// [3] Object.values()

let values = Object.values(person);
console.log(values);

// [4] Object.entries()

let entries = Object.entries(person);
console.log(entries);

// --> Object Methods and Properties

// [1] Object.assign()

let target = {a : 1 , d :4};
let source = { b : 2, c : 3};
let combine = Object.assign(target , source);

console.log(combine);
console.log(target);

// -- spred

let comb = {...target , ...source};
console.log(comb);

// [2] Object.freeze()

let obj = {prop : 45};
Object.freeze(obj);

obj.prop = 33; // this will not work
console.log(obj.prop); // 45

// [3] Object.seal()

let obj1 = {prop : 42};
Object.seal(obj1);

obj1.prop = 33; // this will work
delete obj1.prop; // this will not work
console.log(obj1.prop);

// [4] Object.is()
//Object.is works much like ===.

let obj01 = {};
let obj2 = {};
let obj3 = obj01;

console.log(Object.is(obj01, obj2));  // false (different objects)
console.log(Object.is(obj01, obj3));  // true (same reference)
console.log(Object.is([], []));      // false (different arrays)

// [5] Object.getPrototypeOf()

let proto = {};
let OBJ = Object.create(proto);
console.log(Object.getPrototypeOf(OBJ) === proto); // true

// [6] Object.setPrototypeOf()

let proto1 = {};
let OBJ1 = {};
Object.setPrototypeOf(OBJ1, proto1);
console.log(Object.getPrototypeOf(OBJ1) === proto1);  // true

// --> Prototypes and Inheritance

// [1] Defining a Class
// prototype chain (use in old version Person.prototype.greet)

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log('Hello, ' + this.firstname);
    }
}

let Yovan = new Person('yovan','chheta');
Yovan.greet();

// [2] Class Inheritance

class Employee extends Person {
    constructor(firstName, lastName, jobTitle) {
      super(firstName, lastName);
      this.jobTitle = jobTitle;
    }
    
    work() {
      console.log(this.firstName + ' is working as a ' + this.jobTitle);
    }
  }
  
  let jane = new Employee('Jane', 'Doe', 'Software Engineer');
  jane.greet();  // 'Hello, Jane'
  jane.work();  // 'Jane is working as a Software Engineer'
  
// [3] Static Methods

class Helper {
    static log(message) {
      console.log(message);
    }
  }
  
Helper.log('This is a static method');  // 'This is a static method'
  

