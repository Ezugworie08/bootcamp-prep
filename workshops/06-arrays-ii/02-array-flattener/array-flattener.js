// YOUR CODE BELOW

function arrayFlattener(array) {
    const arrLen = array.length;
    let flattened = [];

    for (let i = 0; i < arrLen; i++) {
        if (Array.isArray(array[i])) {
            flattened = flattened.concat(arrayFlattener(array[i]));
        } else {
            flattened.push(array[i]);
        }
    }
    return flattened;
}