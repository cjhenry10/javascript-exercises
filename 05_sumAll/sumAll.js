const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    let greater, lesser;
    if (num1 > num2) {
        greater = num1;
        lesser = num2;
    }
    else if (num2 > num1) {
        greater = num2;
        lesser = num1;
    }
    else {
        return 0;
    }
    let sum = 0;
    for (let i = lesser; i < greater + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
