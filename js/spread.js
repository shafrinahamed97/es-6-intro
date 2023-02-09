const max = Math.max(12, 85, 999, 78);
// console.log(max);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [...numbers, 111];
console.log(numbers4);

/*         SPREAD OPERATOR
Tha JS spread operator(...) allows us to quickly copy all or part of an existing array or object into another array or object.


*/