// YOUR CODE BELOW

function makeGrid(cols, rows) {
    let
        grid = [],
        rowArr = [];
    
    for (let i = 1; i <=cols; i++){
        rowArr.push(i);
    }

    for (let j = 0; j < rows; j++) {
        grid.push(rowArr);
    }

    return grid;
}