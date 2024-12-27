const removeFromArray = function(array, toRemove) {

    const newArray = array.filter(checkFilter);

        function checkFilter (item) {
            return item != toRemove;
        }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
