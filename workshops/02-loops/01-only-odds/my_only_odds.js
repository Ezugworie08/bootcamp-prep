// YOUR CODE BELOW

function myNormalize(value) {
    return (value) ? Number(value) : 1;
}

function isEven(value) {
    return ((value % 2) === 0) ? true : false;
}

function myRange(stop, start, step) {
    start = myNormalize(start);
    stop = myNormalize(stop);
    step = myNormalize(step);
    let out = [];

    for (let i = start; i <= stop; i += step) {
        out.push(i);
    }

    return out;
}

function mySum(array) {
    return array.reduce(function(acc, elem, idx, array){
        return (acc + elem);
    }, 0);
}

function onlyOdds(num) {
    let sum = null;
    if (num < 1) { sum = 0; }
    else {
        sum = mySum(myRange(num).filter(function(elem, idx, array){
            if (!isEven(elem)) return elem;
        }));
    }
    return sum;
}