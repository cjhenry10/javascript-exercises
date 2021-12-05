const reverseString = function(str) {
    let reversed = '';
    let split = str.split("");
    let reverseArr = split.reverse();
    reversed = reverseArr.join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
