import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

import { useState } from "react";

function App() {
  const [ activePlayer, setActivePlayer ] = useState('X');
  function selectSquareHandler () {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? '0' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="0"/>
        </ol>
        <GameBoard onSelectSquare={selectSquareHandler} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
