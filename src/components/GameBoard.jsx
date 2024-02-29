import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

  function selectSquareHandler (rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
        // prevGameBoard[rowIndex][colIndex] = 'X'; //wrong way to update object state
        const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedGameBoard[rowIndex][colIndex] = 'X';
        return updatedGameBoard;
    })
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectSquareHandler(rowIndex, colIndex)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
