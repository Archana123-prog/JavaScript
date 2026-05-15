/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        // minimum is on right side
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        }

        // minimum is on left side including mid
        else {
            right = mid;
        }
    }

    return nums[left];
};