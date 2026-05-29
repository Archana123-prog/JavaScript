/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {

    let ans = Infinity;

    for (let num of nums) {

        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        ans = Math.min(ans, sum);
    }

    return ans;
};