const arr = [3, 4, 5, 6];
//spreading copy an array in a new memory location, normally copy the same array
const arr2 = [...arr];

arr.push(10);
arr2.push(20);

console.log(arr);
console.log(arr2);
