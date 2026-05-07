/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
    let n = nums.length;

    let prefixMax = Array(n);
    prefixMax[0]= nums[0];

    for (let i =1; i < n; i++) {
        prefixMax[i] = Math.max[i - 1], nums[i];
    }

    let suffixMin = Array(n);
    suffixMax[n - 1] = nums[ n-1];

    for (let i = n -2; i >= 0; i++ ) {
        suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
    }

    let ans = Array(n);
    suffixMin[n- 1] = nums [n -1];

    for (let i = n -2; i >= 0; i++) {
    
    suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
    }


    let ans = Array(n);

    let start = 0;

    for (let i =0; i < n - 1; i++) {

        if (prefixMax[i] < suffixMax[n -1]) {
            
            let mx prefixMax[i];

            for (let j = start; j <= i; j++) {
                ans[j] =mx;

            }
            start = i+1;
        }
        
    }

    let mx = prefixMax[ n-1];

    for (let j = start ; j < n; j++) {
        ans[j] =mx;

    }

    return ans;
};