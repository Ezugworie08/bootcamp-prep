// YOUR CODE BELOW

function zooInventory(zoo) {
    let out = [];
    const len = zoo.length;

    for (let i = 0; i < len; i++) {
        let animal = zoo[i];
        let msg = animal[0] + ' the ' +  animal[1][0] + ' is ' + animal[1][1] + '.';
        out.push(msg);
    }
    return out;
}