/*
Take the string
turn it into an array
reverse it
check each element one by one
return false if one found to be different
return true if all the same
ignore punctuation
*/


const palindromes = function (string) {

    let forwardString = string.toLowerCase().replace(/[,.!]/g,"").split(" ").join("");
    let reverseString = forwardString.split("").reverse().join("")
    return forwardString === reverseString;

};

// Do not edit below this line
module.exports = palindromes;
