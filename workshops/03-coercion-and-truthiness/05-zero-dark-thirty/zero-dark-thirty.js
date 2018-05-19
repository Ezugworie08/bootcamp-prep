// YOUR CODE BELOW

function zeroDarkThirty(value) {
    value = Number(value)
    const strValue = String(value);
    const strLen = strValue.length;
    let newValue = '';
    if (value) {
        for (let i = 0; i < strLen; i++) {
            if (strValue[i] !== '0') {
                newValue += strValue[i];
            }
        }
        return Number(newValue);
    } else {
        return NaN;
    }
}