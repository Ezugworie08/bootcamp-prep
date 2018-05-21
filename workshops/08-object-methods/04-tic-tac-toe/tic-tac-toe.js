// YOUR CODE BELOW

const ticTacToe = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],

    move: function(char, row, col) {
        if (this.board[row][col] === null) {
            this.board[row][col] = char;
        }
        return this.board;
    },

    clear: function(row, col) {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        return this.board;
    }
};