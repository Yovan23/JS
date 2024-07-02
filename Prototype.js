function multipleBy5(num) {
    return num*5;
}
multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// Add new method in prototype 

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const yovan = new createUser('yovan', 50);
const Ram = new createUser('Ram', 68);

yovan.printMe();

// 

let myName = "Yovan   ";

console.log(myName.length);

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lengt is : ${this.trim().length}`);
}

// Object.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True lengt is : ${this.trim().length}`);
// }
// -> here you add prototype in String but if you add in Object then you excess in string , function and arrey also.

myName.trueLength();