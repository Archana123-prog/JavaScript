/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    let n = arr.length;
    if (n === 1) return 0;

    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])){
            if (!map.has(arr[i])) {
                map.set(arr[i], []);

            }
            map.get(arr[i], []);
        }
        map.get(arr[i]).push(i);

    }

       // BFS
    let queue = [0];
    let front = 0;

    let visited = Array(n).fill(false);
    visited[0] = true;

    let steps = 0;

    while (front < queue.length) {

        let size = queue.length - front;

        for (let s = 0; s < size; s++) {

            let i = queue[front++];

            // reached end
            if (i === n - 1) {
                return steps;
            }

            let neighbors = [];

            // left
            if (i - 1 >= 0) {
                neighbors.push(i - 1);
            }

            // right
            if (i + 1 < n) {
                neighbors.push(i + 1);
            }

            // same value
            if (map.has(arr[i])) {
                neighbors.push(...map.get(arr[i]));

                // IMPORTANT
                map.delete(arr[i]);
            }

            // visit neighbors
            for (let next of neighbors) {

                if (!visited[next]) {

                    visited[next] = true;
                    queue.push(next);
                }
            }
        }

        steps++;
    }

    return -1;

};