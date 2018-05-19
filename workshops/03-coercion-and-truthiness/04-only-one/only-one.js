// YOUR CODE BELOW
// I didn't get this one right this time.

function onlyOne(one, two, three) {
    return (
        (!!one && !two && !three) ||
        (!one && !!two && !three) ||
        (!one && !two && !!three)
        // !!one + !!two + !!three === 1;
    );
}