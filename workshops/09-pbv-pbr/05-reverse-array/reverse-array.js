// YOUR CODE BELOW

function reverseArray(array) {
    const lastIdx = array.length - 1;
    const revLen = Math.floor(array.length/2);

    for (let i = 0; i < revLen; i++) {
        let 
            j = lastIdx - i,
            tmp = array[i];
        array[i] = array[j];
        array[j] = tmp; 
    }
    
    return array;
}