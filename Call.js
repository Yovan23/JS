function SetUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    SetUsername.call(this, username);  // use the super 
    this.email = email;
    this.password = password;
}

const Yovan = new createUser("yovan", "yovan@fb.com", "yovan123");
console.log(Yovan);

// for the hold refrence use .call
// give refrence this of the createUser to function SetUsername(username) {
