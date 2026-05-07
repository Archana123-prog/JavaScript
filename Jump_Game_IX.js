/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {

    let n = nums.length;

    // Step 1: suffix minimum
    let suffixMin = Array(n);

    suffixMin[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
    }

    let ans = Array(n);

    let start = 0;
    let currentMax = nums[0];

    // Step 2: build components
    for (let i = 0; i < n - 1; i++) {

        currentMax = Math.max(currentMax, nums[i]);

        // ✅ FIX HERE: <=
        if (currentMax <= suffixMin[i + 1]) {

            for (let j = start; j <= i; j++) {
                ans[j] = currentMax;
            }

            start = i + 1;
            currentMax = nums[i + 1];
        }
    }

    // Step 3: last component
    currentMax = Math.max(currentMax, nums[n - 1]);

    for (let j = start; j < n; j++) {
        ans[j] = currentMax;
    }

    return ans;
};

//All coreected test cases passed!