const add = function(num1, num2) {
  const result = num1 + num2;
  return result;	
};

const subtract = function(num1, num2) {
  const result = num1 - num2;
  return result;
	
};

const sum = function(toSum) {
  let finalSum = 0;
  for (let i = 0; i < toSum.length; i++) {
    finalSum += toSum[i];
  }
  return finalSum
};

const multiply = function(nums) {
  let finalSum = 1;
  for (let i = 0; i < nums.length; i++) {
    finalSum *= nums[i];
  }
  return finalSum;

};

const power = function(num1, num2) {
  const result = num1 ** num2;
  return result;
};

const factorial = function(num) {

  let result = 1;
  if (num === 0 || num === 1) {
    return result;
  } else {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }	
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
