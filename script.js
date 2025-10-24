function createGameboard() {
  let board = [];
  return {
    createBoard() {
      for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
          board[i].push(j);
        }
      }
    },
    getBoard() {
      return board;
    },
  };
}

const newGame = createGameboard();
newGame.createBoard();
console.log(newGame.getBoard());

function playerOne() {}

function playerTwo() {}
