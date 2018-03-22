// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'New York',
//     temp: 22
//   }
// };
//
// const { name = 'Anonymous', age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp: tempurature } = person.location;
//
// if (city && tempurature) {
//   console.log(`It's ${tempurature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(`${publisherName}`);


const address = ['12 Baw Baw Street', 'Thurgoona', 'NSW', '2640'];

const [, city, state] = address;

console.log(`You are in ${city}, ${state}.`);
