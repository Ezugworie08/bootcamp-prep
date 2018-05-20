// YOUR CODE BELOW

function removeColumns(grid, cols) {
    const len = grid.length;

    for (let i = 0; i < len; i++) {
        for (j = 0; j < cols; j++) {
            grid[i].pop();
        }
    }
    return grid;
}