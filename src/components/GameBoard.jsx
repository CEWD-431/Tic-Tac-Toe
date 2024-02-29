import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
    const gameBoard = initialGameBoard;
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }


//   const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

//   function selectSquareHandler (rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//         // prevGameBoard[rowIndex][colIndex] = 'X'; //wrong way to update object state
//         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
//         return updatedGameBoard;
//     })
//     onSelectSquare();
//   }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                disabled={playerSymbol!==null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
