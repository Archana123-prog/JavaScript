/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {

    let n = arr.length;

    let queue = [start];
    let front = 0;

    let visited =Array(n).fill(false);
    visited[start]= true;

    while (front < queue.length) {

        let i = queue[front++];

        if (arr[i]===0) {
          return true;
        }  

        let next1 = i + arr[i];
        let next2 = i - arr[i];

        if (
            next1 >= 0 &&
            next1 < n &&
            !visited[next1]
        ) {
            visited[next1] = true;
            queue.push(next1);
        }

        if (
            next2 >= 0 &&
            next2 < n &&
            !visited[next2]
        ){
            visited[next2] = true;
            queue.push(next2);
        }
    }

    return false;
    
};