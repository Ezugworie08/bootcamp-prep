// YOUR CODE BELOW

function lastCharacter(one, two) {
    if (one.toLowerCase()[one.length - 1] !== two.toLowerCase()[two.length - 1]) return false;
    return true;
}