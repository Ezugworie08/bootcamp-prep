// YOUR CODE BELOW

function veryOddMutant(array) {
    const len = array.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if ((array[i] % 2) === 0) {
            array[i] = 'normie';
            count += 1;
        }
    }
    return count;
}