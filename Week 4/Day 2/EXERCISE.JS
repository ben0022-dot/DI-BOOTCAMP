//Create a function called printFullName.
function printFullName(first = 'Elie', last = 'Schoppik') {
  return `${first} ${last}`;
}
//The function should take in an object as a parameter, which contains the keys first and last.
//The function should return a string which displays the full name of the person.
console.log(printFullName({first: 'Elie', last: 'Schoppik'}));
// The output of the code will be:
// Elie Schoppik
//Create a function that takes an object and returns the keys and values as separate arrays.
function separateKeysAndValues(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return [keys, values];
}

const myObject = {a: 1, b: 2, c: 3};
console.log(separateKeysAndValues(myObject));
// The output of the code will be:
// [['a', 'b', 'c'], [1, 2, 3]]
//Analyze the code below, what will be the output?
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
