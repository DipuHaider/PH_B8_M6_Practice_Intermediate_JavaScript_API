// normal method
// const person = {
//   name: "mehedi",
//   age: 26,
//   address: "Dhaka",
// };

// const name = person.name;
// console.log(name);

//es6 object destructuring method
const person = {
  name: "mehedi",
  age: 26,
  address: "Dhaka",
};

// const { age } = person;
// console.log(age);

const { age, ...rest } = person;
console.log(rest);
