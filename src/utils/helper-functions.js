import { WINNING_COMBINATIONS } from "./winning-combinations";

export function deriveActivePlayer (gameTurns) {
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }
    return currentPlayer;
}

export function deriveGameBoard (initialGameBoard, gameTurns) {
    const gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
    }
    return gameBoard;
}

export function deriveWinner (gameBoard, players) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
      if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
        winner = players[firstSquareSymbol];
      }
    }
    return winner;
  }
  
