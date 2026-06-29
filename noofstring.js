/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    for (const s of patterns) {
        if (word.includes(s)) {
            count++;
        }
    }
    return count;
};