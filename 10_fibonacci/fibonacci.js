const fibonacci = function(memberPosition) {
    const memberPositionParsed = parseInt(memberPosition);
    let previousFibonacci = 0;
    let currentFibonacci = 1;

    if (memberPositionParsed < 1) {
        return "OOPS";
    }
    for (let i = 1; i < memberPositionParsed; i++) {
        let temp = currentFibonacci;
        currentFibonacci = previousFibonacci + currentFibonacci;
        previousFibonacci = temp;
    }

    return currentFibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
