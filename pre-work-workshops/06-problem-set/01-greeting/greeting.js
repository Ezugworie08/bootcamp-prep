// YOUR CODE BELOW

function greeting(name) {
    let greet = null;
    if (name && typeof name === 'string') greet = 'Hello ' + name + '!';
    else greet = 'Hello!';

    return greet;
}