/**
 * Sums all the numbers (including) between the two arguments
 * 
 * @param {number} number1 
 * @param {number} number2 
 */
const sumAll = function(number1, number2) {
    // check if arguments are strictly numbers
    if (!(typeof(number1) === "number" && typeof(number2) === "number")) {
        return "ERROR";
    }
    else if (number1 < 0 || number2 < 0) {
        return "ERROR";
    }

    // make sure the sum starts with the smaller number and ends with the bigger number
    const start = number1 <= number2 ? number1 : number2;
    const end = number1 <= number2 ? number2 : number1;

    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
