const palindromes = function (aString) {
    let string = aString.toLowerCase().replace(/[^A-z]/g, "");
    result = string.split("").reverse().join("") == string;
    return result;
};

// Do not edit below this line
module.exports = palindromes;
