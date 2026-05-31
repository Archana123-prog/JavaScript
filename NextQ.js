var asteroidsDestroyed = function(mass, asteroids) {
    const MAXA = 100000;
    const cnt = new Array(MAXA + 1).fill(0);

    // Count frequency of each asteroid size
    for (const ast of asteroids) {
        cnt[ast]++;
    }
    let curmass = mass;
    // Process asteroids from smallest to largest
    for (let ast = 1; ast <= MAXA; ast++) {
        while (cnt[ast] > 0) {
            if (curmass < ast) return false;

            curmass += ast;
            cnt[ast]--;
        }
    }

    return true;
};