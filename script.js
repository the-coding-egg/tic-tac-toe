const gameboard = (function () {
  let board = [];
  return {
    createBoard() {
      for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
          board[i].push(j);
        }
      }
      return board;
    },
  };
})();

console.log(gameboard.createBoard());

function playerOne() {}

function playerTwo() {}
