// YOUR CODE BELOW

function myReverse(array) {
    const startPos = array.length - 1;
    let reversed = [];

    for (let i = startPos; i >= 0; i--) {
        reversed.push(array[i]);
    }

    return reversed;
}