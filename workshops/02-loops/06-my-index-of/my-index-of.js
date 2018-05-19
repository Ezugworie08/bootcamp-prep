// YOUR CODE BELOW

function myIndexOf(source, search, start) {
    let idx = -1;
    source = (source) ? String(source) : '';
    let sourceLen = source.length;
    search = (search) ? String(search) : '';
    let searchLen = search.length;
    start = isNaN(Number(start)) ? 0 : Number(start);
    let endIdx = sourceLen - (searchLen - 1);

    if (source === search && start === 0) { idx = 0; return idx; }
    if (search === '' || source  === '') return sourceLen;

    for (let i = start; i < endIdx; i += 1) {
        let tempStr = '';
        for (let j = 0; j < searchLen; j += 1) {
            if (source[i + j] === search[j]) {
                tempStr += source[i + j];
            } else {
                break;
            }
        }
       if (tempStr === search) { idx = i; return idx; }
    }
    return idx;
}
