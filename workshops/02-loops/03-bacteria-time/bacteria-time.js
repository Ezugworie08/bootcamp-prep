// YOUR CODE BELOW

function bacteriaTime(init, final) {
    const factor = 20
    let counter = 0;

    if (init > final) return 'targetNum must be larger than currentNum';

    while(final > init) {
        init *= 2;
        counter += 1;
    }

    return (counter * factor);
}