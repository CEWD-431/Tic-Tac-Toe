import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"

import { useState } from "react";

function deriveActivePlayer (gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = '0';
  }
  return currentPlayer;
}

function App() {
  // const [ activePlayer, setActivePlayer ] = useState('X');
  const [ gameTurns, setGameTurns ] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function selectSquareHandler (rowIndex, colIndex) {
    // setActivePlayer(currentActivePlayer => currentActivePlayer === 'X' ? '0' : 'X');
    setGameTurns(previousTurn => {
      const currentPlayer = deriveActivePlayer(previousTurn);
      const updatedTurn = [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...previousTurn]
      return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer ==='X'} />
          <Player initialName="Player 2" symbol="0" isActive={activePlayer ==='0'}/>
        </ol>
        <GameBoard onSelectSquare={selectSquareHandler} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
