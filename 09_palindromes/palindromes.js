/**
 * 
 * @param {string} text 
 */
const palindromes = function (text) {
    const processedText = text.toLowerCase().replace(/[^a-z]/g, "");
    
    const textArray = processedText.split("");
    const textArrayReverse = textArray.map((x) => x);
    textArrayReverse.reverse();

    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i] !== textArrayReverse[i]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
