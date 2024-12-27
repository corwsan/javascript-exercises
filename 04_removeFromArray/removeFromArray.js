const removeFromArray = function(array, ...args) {

    const newArray = array.filter(checkFilter);

        function checkFilter (item) {
            return !args.includes(item);
        }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
