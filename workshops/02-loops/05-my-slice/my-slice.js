// YOUR CODE BELOW

function mySlice(str, start, stop) {
    let slice = '';

    str = (str) ? String(str) : '';
    const strLen = str.length;
    start = isNaN(Number(start)) ? 0 : Number(start);
    stop = isNaN(Number(stop)) ? strLen : Number(stop);

    if (start < 0) start = 0;
    if (start > strLen) start = strLen;
    if (stop < 0) stop = (strLen + stop);
    if (stop > strLen) stop = strLen;
    if (start === stop) return slice;
    if (start > stop) return slice;

    for (let i = start; i < stop; i++) {
        slice += str[i];
    }

    return slice;
}