// YOUR CODE BELOW

function maxOfThree(one, two, three) {
    let max = null;
    if (one > two && one > three) return one;
    if (two > one && two > three) return two;
    if (three > one && three > two) return three;
}