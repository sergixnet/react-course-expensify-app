const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Andrew', age: 27 });
    // reject('Something went wrong');
  }, 3000);
});

console.log('before');

promise
  .then((data) => {
    console.log(1, data);
    return 'some data';
  })
  .then((data) => console.log('does this run?', data))
  .catch((error) => console.log('error', error));

console.log('after');
