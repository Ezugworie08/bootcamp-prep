// YOUR CODE BELOW

function myLastIndexOf(array, search, startIdx) {
    const arrLen = array.length;
    startIdx = isNaN(Number(startIdx)) ? arrLen : Number(startIdx);

    for (let i = startIdx; i >=0; i--) {
        if (array[i] === search) {
            return i;
        }
    }
    return -1;
}