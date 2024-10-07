import { useState } from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export function GameBoard(){
    const [board, setBoard] = useState(initialBoard);

    function handleSquareClick (rowIndex, colIndex, selectedSymbol) {

        setBoard((prevGameBoard) =>{
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = "X";
            return updatedGameBoard;
        })
    };

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((symbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => handleSquareClick(rowIndex, colIndex)}>{symbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}