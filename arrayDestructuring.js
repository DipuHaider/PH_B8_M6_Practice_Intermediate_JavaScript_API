const arr = [3, 4, 5, 6, 7, 8, 9];

// normal method
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// destructuring method
// const [a, b, c] = arr;
// console.log(a, b, c);

// destructuring method with the rest
const [a, b, c, ...rest] = arr;
console.log(a, b, c, rest);
