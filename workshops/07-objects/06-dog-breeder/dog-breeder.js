// YOUR CODE BELOW

function dogBreeder(name, age) {
    if (
        (name === undefined) || 
        (String(name).trim() === '') ||
        (typeof name !== 'string')
    ) {
        age = name;
        name = 'Steve';
    }
    age = isNaN(Number(age)) ? 0 : Number(age);
    return {name:name, age:age}
}