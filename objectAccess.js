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

const complexObject = {
  id: 1,
  name: "Main Object",
  info: {
    description: "This is a complex nested object",
    author: {
      firstName: "John",
      lastName: "doe",
    },
  },
  data: {
    values: [10, 20, 30, 40],
    settings: {
      disabled: true,
      maxItems: 5,
    },
  },
};

console.log("name: ", complexObject.name);
console.log("description: ", complexObject.info.description);
console.log("Last Name: ", complexObject.info.author.lastName);
console.log("indexed Values: ", complexObject.data.values[2]);
console.log(
  "Last Values: ",
  complexObject.data.values[complexObject.data.values.length - 1]
);

//Optional chaining - if value is there then proceed , if not then stop
console.log(complexObject?.contact?.phone.name);
