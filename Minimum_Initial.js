var minimumEffort = function(tasks) {

    // Sort by (minimum - actual) descending
    tasks.sort((a, b) => {
        return (b[1] - b[0]) - (a[1] - a[0]);
    });

    let ans = 0;
    let energy = 0;

    for (let [actual, minimum] of tasks) {

        // If current energy is less than minimum required
        if (energy < minimum) {
            ans += (minimum - energy);
            energy = minimum;
        }

        // Complete the task
        energy -= actual;
    }

    return ans;
};
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1) if we ignore the space used for sorting, otherwise O(n)