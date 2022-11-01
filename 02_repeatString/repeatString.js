const repeatString = function(inputString, nTimes) {
    if (nTimes < 0) {
        return "ERROR";
    }
    resultString = "";

    for (let i = 1; i <= nTimes; i++) {
        resultString += inputString;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
