// YOUR CODE BELOW

function myJoin(array, separator) {
    separator = (separator === undefined) ? ',' : separator;
    let joined = (array[0]) ? array[0] : ''; 
    let len = array.length;

    for (let i = 1; i < len; i++) {
        if (array[i] === null || array[i] === undefined) {
            joined += separator + '';
        } else {
            joined += separator + array[i] + '';
        }
    }
    return joined;
}