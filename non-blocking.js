const getUser = require('./getUser');

const userAsync1 = getUser(123, console.log);
const userAsync2 = getUser(123, console.log);
const sum = 3 + 1;
console.log(`The sum is ${sum}`);
