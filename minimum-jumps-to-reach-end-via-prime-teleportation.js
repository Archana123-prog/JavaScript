/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {

    let n = nums.length;

    if (n === 1) return 0;

    // prime check
    const isPrime = (x) => {

        if (x < 2) return false;

        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false;
        }

        return true;
    };

    // prime -> indices
    let primeMap = new Map();

    for (let i = 0; i < n; i++) {

        let val = nums[i];

        for (let p = 2; p * p <= val; p++) {

            if (val % p === 0) {

                if (!primeMap.has(p)) {
                    primeMap.set(p, []);
                }

                primeMap.get(p).push(i);

                while (val % p === 0) {
                    val /= p;
                }
            }
        }

        if (val > 1) {

            if (!primeMap.has(val)) {
                primeMap.set(val, []);
            }

            primeMap.get(val).push(i);
        }
    }

    // BFS
    let queue = [[0, 0]];
    let front = 0;

    let visited = Array(n).fill(false);
    visited[0] = true;

    let usedPrime = new Set();

    while (front < queue.length) {

        let [i, steps] = queue[front++];

        if (i === n - 1) return steps;

        // adjacent
        for (let next of [i - 1, i + 1]) {

            if (next >= 0 && next < n && !visited[next]) {

                visited[next] = true;
                queue.push([next, steps + 1]);
            }
        }

        // teleport
        let val = nums[i];

        if (isPrime(val) && !usedPrime.has(val)) {

            usedPrime.add(val);

            if (primeMap.has(val)) {

                for (let next of primeMap.get(val)) {

                    if (!visited[next]) {

                        visited[next] = true;
                        queue.push([next, steps + 1]);
                    }
                }
            }
        }
    }

    return -1;
};

// Executed on LeetCode, all test cases passed!