// YOUR CODE BELOW

function compareObjects(one, two) {
    if (Object.keys(one).length !== Object.keys(two).length) {
        return false;
    }
    for (let key in one) {
        if (!two.hasOwnProperty(key)) return false;
        if (one[key] !== two[key]) return false;
    }
    return true;
}