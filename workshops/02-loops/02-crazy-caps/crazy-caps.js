// YOUR CODE BELOW

function crazyCaps(str) {
    str = str.toLowerCase();
    let crazy = str[0];
    const strLen = str.length;

    for (let i = 1; i < strLen; i++) {
        if ((i % 2) !== 0) {
            crazy += str[i].toUpperCase();
        } else {
            crazy += str[i];
        }
    }

    return crazy;
}