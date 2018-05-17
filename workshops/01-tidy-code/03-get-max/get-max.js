// YOUR CODE BELOW
function getMax(first, second, last) {
    if (first > second) {
        if (first > last) {
            return first;
        } 
        return last;
    } else if (second > last) {
        return second;
    }else {
        return last;
    }
}
