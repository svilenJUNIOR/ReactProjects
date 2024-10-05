const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export function GameBoard(){
    return (
        <ol id="game-board">
            {initialBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((symbol, colIndex) => 
                    <li key={colIndex}>
                        <button>{symbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}