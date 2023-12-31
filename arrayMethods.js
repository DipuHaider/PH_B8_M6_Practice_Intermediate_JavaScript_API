// forEach, Map, Find, Filter, Reduce

// const arr = [1, 2, 3];

// for (let item of arr) {
//   console.log(item);
// }

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// FOREACH ################################ Does not return anything
//const arr = [1, 2, 3];

// const a = (x) => console.log(x);
// arr.forEach(a);

//arr.forEach((x) => console.log(x));

// const fruits = ["mango", "banana", "berry"];
// fruits.forEach((item) => {
//   console.log(item);
// });

// const arr = [1, 2, 3];
// let sum = 0;
// // arr.forEach((item) => {
// //   //   sum = sum + item;
// //   sum += item;
// // });
// arr.forEach((item) => (sum += item));

// console.log(sum);

// MAP ################################ Returns an array
// const arr = [1, 2, 3];
// // const result = arr.forEach((item) => item); //Does not return anything
// // console.log(result);//Does not return anything

// const result1 = arr.map((item) => item * 2); //Returns an array
// console.log(result1); //Returns an array
// console.log("main array", arr); //Main array remains intact

// const fruits = ["mango", "banana", "berry"];

// fruits.forEach((item) => console.log(item));

//es6 foreach
// //array.forEach((element, index, mainArray)) => {})
// fruits.forEach((item, index, arr) => console.log(item, index, arr));

// FIND ################################ Returns a value depending on condition, if not matched returns undefined
// const fruits = ["mango", "banana", "berry"];
// const find = (fruits) => {
//   for (let item of fruits) {
//     if (item === "banana") {
//       return item;
//     }
//   }
//   return null;
// };

// const x = find(fruits);
// console.log(x);

//es6 find
// const fruits = ["mango", "banana", "berry"];
// const y = fruits.find((item) => item === "banana");
// console.log(y);

// FILTER ################################ Returns all value in an array depending on condition, if not matched returns an empty array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const filter = (numbers) => {
//   const result = [];

//   for (let item of numbers) {
//     if (item % 2 === 0) {
//       result.push(item);
//     }
//   }
//   return result;
// };

// const x = filter(numbers);
// console.log(x);

// // es6 filter
// const y = numbers.filter((item) => item % 2 === 0);
// console.log(y);

// REDUCE ################################ Returns all value in an array depending on condition, if not matched returns an empty array
const arr = [1, 2, 3, 4, 5];

// previous + current = result
/*
    0   +   1   =   1
    1   +   2   =   3
    3   +   3   =   6
    6   +   4   =   10
    10   +   5   =   15
*/
// // const sum = arr.reduce((previous, current) => previous + current);
// const sum = arr.reduce((previous, current) => previous + current, 0); // 0 is the initial value for addition
// console.log(sum);

// previous * current = result
/*
    1   *   1   =   1
    1   *   2   =   2
    2   *   3   =   6
    6   *   4   =  24
    24   *   5   =   120
*/
// // const sum = arr.reduce((previous, current) => previous * current);
// const sum = arr.reduce((previous, current) => previous * current, 1); // 1 is the initial value for multiplication
const initial = 10;
const sum = arr.reduce((previous, current) => previous * current, initial); // 10 is the initial value for multiplication
console.log(sum);
