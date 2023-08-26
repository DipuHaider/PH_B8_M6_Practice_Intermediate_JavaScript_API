const person = {
  name: "mehedi",
  age: 26,
  address: "Dhaka",
};

//dot notation
console.log(person.age);

//bracket notation
console.log(person["age"]);

//if assigned in a variable, then accessing by property value
const propertyName = "age";
console.log(person[propertyName]);
