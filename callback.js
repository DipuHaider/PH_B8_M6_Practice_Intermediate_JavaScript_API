const function1 = (callback) => {
  //   console.log(typeof callback);
  callback();
};

const callback = () => {
  console.log("I am callback function");
};

function1(callback);
