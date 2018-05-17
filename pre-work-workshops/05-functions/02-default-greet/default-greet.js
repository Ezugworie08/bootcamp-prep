// YOUR CODE BELOW
function defaultGreet(first, last) {
    first = (first) ? String(first) : 'John';
    last = (last) ? String(last) : 'Doe';

    return ("Hi " + first + " " + last + "!");
}