/**
 * @param {number[][]} matrix
 * @return {void}
 */
var rotate = function(matrix) {
    let n = matrix.length;

    // Step 1: transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};