// YOUR CODE BELOW

function myMnemonic(one, two, three, four) {
    let mnemonic = '';
    if (one && typeof one === 'string') { mnemonic += one[0]; }
    if (two && typeof two === 'string') { mnemonic += two[0]; }
    if (three && typeof three === 'string') { mnemonic += three[0]; }
    if (four && typeof four === 'string') { mnemonic += four[0]; }
    return mnemonic;
}