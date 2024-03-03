import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import GameOver from "./components/GameOver";
import Log from "./components/Log"
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./utils/helper-functions"
import { useState } from "react";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const [ players, setPlayers ] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(INITIAL_GAME_BOARD, gameTurns);
  const winner = deriveWinner(gameBoard, players);
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

  function editNameHandler (symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer ==='X'} onEditName={editNameHandler} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer ==='O'} onEditName={editNameHandler} />
        </ol>
        {(winner || hasDraw) ? <GameOver winner={winner} onRematch={rematchHandler} /> : undefined}
        <GameBoard onSelectSquare={selectSquareHandler} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
