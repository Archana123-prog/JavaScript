//Mirror Distance of an Integer
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    const reverse = (num) => {
        let rev = 0;
        while (num > 0 ) {
            rev = rev * 10 + (num % 10);
            num = Math.floor(num / 10);
        
        }
        return rev;
    };
    let rev = reverse(n);
    return Math.abs(n - rev);

    
};