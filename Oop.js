function User(username , loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; // not 
}

// const userOne = User("yovan", 2 , true);
// const userTwo = User("Ram", 20 , true);
// console.log(userOne);

// Constructor Function make a new copy 
const userOne = new User("yovan", 2 , true);
const userTwo = new User("Ram", 20 , true);
console.log(userOne);
console.log(userTwo.constructor);

// new --> 1. empty object create 
//         2. Constructor function call
//         3. injection of value 

// Class 

class user {
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    enCryptPassword(){
        return `${this.password}abc`
    }

    logMe(){
        console.log(`${this.username}`);
    }

    static createTd(){
        return '123'
    }
}

const yovan = new user("yovan", "yovan@gmail.com", "12345");
 
console.log(yovan.enCryptPassword());
// same thing done by the functon and enCryptPassword add by the .protottype 

// Inheritance 

class Teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const yo = new Teacher("yo","yo@gmail.com","123");
yo.addCourse();

