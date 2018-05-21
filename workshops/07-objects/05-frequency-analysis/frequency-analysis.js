// YOUR CODE BELOW

function frequencyAnalysis(str) {
    const len = str.length;
    let frequency = {};

    for (let i = 0; i < len; i++) {
        if (!frequency.hasOwnProperty(str[i])) {
            frequency[str[i]] = 1;
        } else{
            frequency[str[i]] += 1;
        }
    }

    return frequency;
}