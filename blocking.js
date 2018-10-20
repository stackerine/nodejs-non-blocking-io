const getUserSync = require('./getUserSync');

const userSync1 = getUserSync(321, console.log);
const userSync2 = getUserSync(456, console.log);

const sum = 3 + 1;
console.log(`The sum is ${sum}`);
