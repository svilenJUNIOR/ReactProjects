import { useState } from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export function GameBoard({handePlayerChange, selectedSymbol}){
    const [board, setBoard] = useState(initialBoard);

    function handleSquareClick (rowIndex, colIndex) {

        setBoard((prevGameBoard) =>{
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = selectedSymbol;
            return updatedGameBoard;
        })

        handePlayerChange();
    };

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((symbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => handleSquareClick(rowIndex, colIndex)} disabled={symbol != null}>{symbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}