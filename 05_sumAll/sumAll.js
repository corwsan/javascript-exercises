const sumAll = function(num1, num2) {
    if (num1 > num2) {
        const tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }

    let sum = num1 + num2
    
    //let timesToLoop = function (num1, num2) { return Math.abs(num1-num2);}
    for (let i = num1 + 1; i < num2; i++) {
        sum = sum + i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
