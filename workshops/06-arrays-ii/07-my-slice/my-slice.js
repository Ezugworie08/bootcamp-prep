// YOUR CODE BELOW

function mySlice(array, startIdx, endIdx) {
    const len = array.length;
    let 
        sliced = [],
        startPos = isNaN(Number(startIdx)) ? 0 : Number(startIdx),
        endPos = isNaN(Number(endIdx)) ? len : Number(endIdx);

    if (startPos < 0) startPos = (len + startPos);
    if (startPos > len) startPos = len;
    if (endPos < 0) endPos = (len + endPos);
    if (endPos > len) endPos = len;
    if (startPos === endPos || startPos > endPos) return sliced;

    for (let i = startPos; i < endPos; i++) {
        sliced.push(array[i]);
    }

    return sliced;
}