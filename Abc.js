/*
Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

States of a Promise:

1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: Operation completed successfully.
3. Rejected: Operation failed.  

// const promise = new Promise((resolve, reject) => {
//     // asynchronous operation
//     if ( success ) {
//       resolve(result);
//     } else {
//       reject(error);
//     }
//   });       
  */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });
  
  promise.then(result => {
    console.log(result);  // Outputs 'Success!' after 1 second
  }).catch(error => {
    console.error(error);
  });

// 'fetch' API

  // fetch(url, options)
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error:', error));

  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));

// Example with POST request
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1 ,
      name: 'yovan'
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if(!error) {
      resolve({username: 'yovan', password:'Yovan123'})
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000)
})

promiseOne.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("Finally call this line");
})

// async and await

// async Function:
// Declares an asynchronous function.
// Always returns a Promise.

// await Expression:
// Pauses the execution of an async function until the Promise is resolved. 

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

// Chaining Promises with async/await

async function getData() {
  const response1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post1 = await response1.json();

  const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${post1.userId}`);
  const user = await response2.json();

  console.log(post1, user);
}

getData();

// --> Promises Methods

// [1] Promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values);  // [3, 42, "foo"]
});

// [2] Promise.race
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise4, promise5]).then(value => {
  console.log(value);  // "two"
});

// [3] Promise.allSettled
const promise6 = Promise.resolve(3);
const promise7 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'foo');
});
const promise8 = 42;

Promise.allSettled([promise6, promise7, promise8]).then(results => {
  results.forEach(result => console.log(result.status));
});
// "fulfilled"
// "rejected"
// "fulfilled"

// Combining async/await with Promise.all
async function fetchMultipleData() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

  try {
    const promises = urls.map(url => fetch(url).then(response => response.json()));
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMultipleData();
