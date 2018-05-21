// YOUR CODE BELOW

// function lastFridayNight(expenses) {
//     return (expenses.reduce(function(acc, elem){
//         return (acc + elem.amount);
//     }, 0));
// }

function lastFridayNight(expenses) {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        sum += expenses[i].amount;
    }
    return sum;
}