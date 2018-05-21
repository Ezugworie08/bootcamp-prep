// YOUR CODE BELOW

function deeperCopy(array) {
    let copy = [];
    const len = array.length;

    for (let i = 0; i < len; i++) {
        let currentElem = array[i];
        if(Array.isArray(currentElem)) {
           let innerArray = [];
           for (let j = 0; j < currentElem.length; j++) {
               innerArray.push(currentElem[j]);
           }
           copy.push(innerArray);
        } else {
            copy.push(currentElem);
        }
    }

    return copy;
}