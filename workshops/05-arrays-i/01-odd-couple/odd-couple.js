// YOUR CODE BELOW

function oddCouple (array) {
    return array.filter(function(elem, idx, array){
        if ((elem % 2) !== 0) return elem;
    }).slice(0,2);
}