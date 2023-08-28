const function1 = (a, b, callback) => {
  //   console.log(typeof callback);
  //const b = 10;
  callback(a, b);
};

const callback = (x, y) => {
  //   console.log("I am callback function");
  console.log("Sum: ", x + y);
};

function1(10, 20, callback);
