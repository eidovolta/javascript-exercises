/**
 * 
 * @param {array} inputArray 
 * @param  {...any} wordsToRemove list of arguments to remove from the specified array
 */
const removeFromArray = function(inputArray, ...wordsToRemove) {
    let indexToRemove;

    for (const word of wordsToRemove) {
        indexToRemove = inputArray.indexOf(word);

        // check if the word matches to an array element
        if (indexToRemove > -1) inputArray.splice(indexToRemove, 1);
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
