const fibonacci = function(n) {

    const fib = [0, 1];
    const num = parseInt(n);

    if (num >= 0) {

        for (let i = 2; i <= num; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[num];
    }

    else {
        return "OOPS";
    } 
};

// Do not edit below this line
module.exports = fibonacci;
