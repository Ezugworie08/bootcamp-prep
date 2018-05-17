// YOUR CODE BELOW

function everyWhichWay(one, two, three) {
    let out = null;

    if ((one + two) === three) out = 'sum';
    if ((one - two) === three) out = 'difference';
    if ((one * two) === three) out = 'product';
    if ((one / two) === three) out = 'fraction';

    return out;
}