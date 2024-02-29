import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"

import { useState } from "react";

function App() {
  const [ activePlayer, setActivePlayer ] = useState('X');
  const [ gameTurns, setGameTurns ] = useState([]);

  function selectSquareHandler () {
    setActivePlayer(currentActivePlayer => currentActivePlayer === 'X' ? '0' : 'X');
    setGameTurns(previousTurn => {
      let currentPlayer = 'X';
      if (previousTurn.length > 0 && previousTurn[0].player === 'X') {
          currentPlayer = '0';
      }
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
        <GameBoard onSelectSquare={selectSquareHandler} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
