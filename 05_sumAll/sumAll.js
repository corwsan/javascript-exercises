const sumAll = function(num1, num2) {
    let sum = num1 + num2
    for (let i = num1 + 1; i < num2; i++) {
        sum = sum + i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
