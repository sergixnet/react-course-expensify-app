// Object destructuring

// const person = {
//   age: 26,
//   location: {
//     city: "Philadelphia",
//     temp: 92,
//   },
// };

// const { name = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age}`);
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvania",
  "19147",
];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , price] = item;
console.log(`A medium ${name} costs ${price}`);
