/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {

    let m = grid.length;
    let n = grid[0].length;

    let layers = Math.min(m, n) / 2;

    for (let layer = 0; layer < layers; layer++) {

        let arr = [];

        let top = layer;
        let left = layer;
        let bottom = m - layer - 1;
        let right = n - layer - 1;

        // top row
        for (let j = left; j <= right; j++) {
            arr.push(grid[top][j]);
        }

        // right column
        for (let i = top + 1; i <= bottom - 1; i++) {
            arr.push(grid[i][right]);
        }

        // bottom row
        for (let j = right; j >= left; j--) {
            arr.push(grid[bottom][j]);
        }

        // left column
        for (let i = bottom - 1; i >= top + 1; i--) {
            arr.push(grid[i][left]);
        }

        // rotate
        let len = arr.length;
        let rot = k % len;

        let rotated = arr.slice(rot).concat(arr.slice(0, rot));

        let idx = 0;

        // put back top row
        for (let j = left; j <= right; j++) {
            grid[top][j] = rotated[idx++];
        }

        // put back right column
        for (let i = top + 1; i <= bottom - 1; i++) {
            grid[i][right] = rotated[idx++];
        }

        // put back bottom row
        for (let j = right; j >= left; j--) {
            grid[bottom][j] = rotated[idx++];
        }

        // put back left column
        for (let i = bottom - 1; i >= top + 1; i--) {
            grid[i][left] = rotated[idx++];
        }
    }

    return grid;
};