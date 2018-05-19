// YOUR CODE BELOW

function isTruthy(value) {
    let type = typeof value;
    let msg = '';

    if (value) {
        msg = true;
    } else if (type === 'undefined') {
        msg = 'undefined is falsey';
    } else if (type === 'number') {
        msg = 'The ' + type + ' 0 is falsey (the only falsey number)';
    } else if (type === 'string') {
        msg = 'The empty ' + type + ' is falsey (the only falsey string)';
    } else if (type === 'boolean') {
        msg = 'The ' + type + ' value false is falsey';
    } else if (value === null) {
        msg = 'The null value is falsey';
    }
    
    return msg;
}