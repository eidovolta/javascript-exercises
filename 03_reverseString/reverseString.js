/**
 * 
 * @param {string} stringToReverse 
 */
const reverseString = function(stringToReverse) {
    // puts the string into an array to reverse
    const arrayString = stringToReverse.split("");

    arrayString.reverse();

    // joins the reversed array into a return string
    return arrayString.join("");
};

// Do not edit below this line
module.exports = reverseString;
