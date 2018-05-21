// YOUR CODE BELOW

function veryOdd(array) {
    let odds = array.filter(function(elem){
        if ((elem % 2)!== 0) return elem;
    });
    return odds;
}