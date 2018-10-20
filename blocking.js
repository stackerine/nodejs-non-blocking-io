const getUserSync = require('./getUserSync');

console.log('Get User 1');
const userSync1 = getUserSync(321, console.log);
console.log('Get User 2');
const userSync2 = getUserSync(456, console.log);

const sum = 3 + 1;
console.log(`The sum is ${sum}`);
