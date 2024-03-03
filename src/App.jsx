import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver";
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./utils/winning-combinations";

import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer (gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = '0';
  }
  return currentPlayer;
}

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = initialGameBoard;
  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
      gameBoard[row][col] = player;
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function selectSquareHandler (rowIndex, colIndex) {
    setGameTurns(previousTurn => {
      const currentPlayer = deriveActivePlayer(previousTurn);
      const updatedTurn = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...previousTurn]
      return updatedTurn;
    });
  }

  function rematchHandler () {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer ==='X'} />
          <Player initialName="Player 2" symbol="0" isActive={activePlayer ==='0'}/>
        </ol>
        {(winner || hasDraw) ? <GameOver winner = {winner} onRematch = {rematchHandler} /> : undefined}
        <GameBoard onSelectSquare={selectSquareHandler} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
