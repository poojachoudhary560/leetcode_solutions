/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var search = function (i, j, rows, cols, board, word, K) {
  if (K === word.length) return true;
  if (i < 0 || i === rows || j < 0 || j === cols || board[i][j] != word[K])
    return false;
  let ch = board[i][j];
  board[i][j] = "#";
  let op1 = search(i + 1, j, rows, cols, board, word, K + 1);
  let op2 = search(i - 1, j, rows, cols, board, word, K + 1);
  let op3 = search(i, j + 1, rows, cols, board, word, K + 1);
  let op4 = search(i, j - 1, rows, cols, board, word, K + 1);
  board[i][j] = ch;
  return op1 || op2 || op3 || op4;
};
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (search(i, j, board.length, board[0].length, board, word, 0))
          return true;
      }
    }
  }
  return false;
};
