// YOUR CODE BELOW

function evenAndOdd(array) {
    return [
        array.filter(function(elem){ if(elem % 2 === 0) return elem}),
        array.filter(function(elem){ if(elem % 2 !== 0) return elem})
    ];
}