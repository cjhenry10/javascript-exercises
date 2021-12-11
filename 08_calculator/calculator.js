const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let result = 0;
  arr.forEach(number => {
    result += number;
  })
  return result;
};

const multiply = function(arr) {
  let result = 1;
  arr.forEach(number => {
    result *= number;
  })
  return result;
};

const power = function(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  if (a === 0) return 1;
  let result = 1;
	for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
