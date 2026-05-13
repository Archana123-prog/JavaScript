/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {

    let n = nums.length;

    // difference array
    let diff = Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {

        let a = nums[i];
        let b = nums[n - 1 - i];

        let low = Math.min(a, b) + 1;
        let high = Math.max(a, b) + limit;

        let sum = a + b;

        // initially assume 2 moves
        diff[2] += 2;

        // 1 move range
        diff[low] -= 1;
        diff[high + 1] += 1;

        // 0 move at exact sum
        diff[sum] -= 1;
        diff[sum + 1] += 1;
    }

    let ans = Infinity;
    let curr = 0;

    for (let s = 2; s <= 2 * limit; s++) {

        curr += diff[s];

        ans = Math.min(ans, curr);
    }

    return ans;
};