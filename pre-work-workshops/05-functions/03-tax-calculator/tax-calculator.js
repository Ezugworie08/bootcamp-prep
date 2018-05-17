// YOUR CODE BELOW

function taxCalculator(price, state) {
    let 
        tax = null,
        cost = null;
    if (state === 'NY') {
        tax = (4/100);
        cost = calculatePrice(price, tax);
    } else if (state === 'NJ') {
        tax = (6.625/100);
        cost = calculatePrice(price, tax);
    }
    // return Number(cost.toFixed(2));
    return cost;

    function calculatePrice(amt, taxVal) {
        return (amt + (amt * taxVal));
    }
}