// YOUR CODE BELOW

function exponentiate (base, power) {
    let exponent = 1;

    if (power === 0) return exponent;
    else {
        for (let i = 1; i <= power; i++) {
            exponent *= base;
        }
    }
    return exponent;
}