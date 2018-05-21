// YOUR CODE BELOW

function callThemAll(obj, value) {
    let returned = [];

    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            returned.push(obj[key](value));
        }
    }
    return returned;
}