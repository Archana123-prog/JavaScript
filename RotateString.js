/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    // Step 1: length must match
    if (s.length !== goal.length) return false;

    // Step 2: check rotation
    return (s + s).includes(goal);
};