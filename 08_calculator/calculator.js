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
  for (i = 0; i < toSum.length; i++) {
    finalSum += toSum[i];
  }
  return finalSum
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
