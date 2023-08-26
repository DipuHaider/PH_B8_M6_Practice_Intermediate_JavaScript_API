// normal method
// const person = {
//   name: "mehedi",
//   age: 26,
// };

// const person2 = person;

// person2.address = "Dhaka";
// console.log(person);
// console.log(person2);

// es6 spreading method
const person = {
  name: "mehedi",
  age: 26,
};

const person2 = { ...person };

person2.address = "Dhaka";
console.log(person);
console.log(person2);
