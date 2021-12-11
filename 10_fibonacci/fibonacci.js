const fibonacci = function(a) {
    let last2, last, current;
    last2 = 1;
    last = 1;
    if (a == 1 || a == 2) return 1;
    if (a < 1) return "OOPS";
    for (let i = 2; i < a; i++) {
        current = last2 + last;
        last2 = last;
        last = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
