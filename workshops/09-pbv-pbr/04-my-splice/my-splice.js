// YOUR CODE BELOW

function mySplice(array, start, delCount, toAdd) {
    const len = array.length;
    let deleted = [], beforeStart = [];
    
    for (let i = 0; i < start; i++) {
        beforeStart.push(array.shift());
    }

    for (let k = 0; k < delCount; k += 1){
        deleted.push(array.shift());
    }

    // Insert the `toAdd` element to array.
    if (toAdd) array.unshift(toAdd);

    for (let j = beforeStart.length; j > 0; j -= 1){
        array.unshift(beforeStart.pop())
    }

    return deleted;

}
