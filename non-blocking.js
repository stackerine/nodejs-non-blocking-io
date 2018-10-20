const getUser = require('./getUser');

console.log('Get User 1');
const userAsync1 = getUser(123, console.log);
console.log('Get User 2');
const userAsync2 = getUser(123, console.log);
const sum = 3 + 1;
console.log(`The sum is ${sum}`);
