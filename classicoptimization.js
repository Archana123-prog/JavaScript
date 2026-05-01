/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let n = nums.length;

    // Step 1: total sum
    let totalSum = nums.reduce((a, b) => a + b, 0);

    // Step 2: F(0)
    let F = 0;
    for (let i = 0; i < n; i++) {
        F += i * nums[i];
    }

    let maxVal = F;

    // Step 3: compute F(k) using formula
    for (let k = 1; k < n; k++) {
        F = F + totalSum - n * nums[n - k];
        maxVal = Math.max(maxVal, F);
    }

    return maxVal;
};