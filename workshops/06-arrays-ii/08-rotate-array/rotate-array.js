// YOUR CODE BELOW

function rotateArray(array, spin) {
    const len = array.length;
    let rotated = array.slice();
    spin = isNaN(Number(spin)) ? 0 : Number(spin);
    spins = Math.abs(spin);
    // spins = Math.abs(spins) % len;


    if (spin === 0) return rotated;

    for (let i = 0; i < spins; i++)  {
        if (spin > 0) {
            rotated.unshift(rotated.pop());
        } else {
            rotated.push(rotated.shift());
        }
    }

    return rotated;
}