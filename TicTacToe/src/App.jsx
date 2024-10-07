import { RenderPlayerInfo } from "./components/PlayerInfo";
import { GameBoard } from "./components/GameBoards";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerChange (){
    setActivePlayer((currentPlayer) => currentPlayer === "X"  ? "O" : "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">

          <RenderPlayerInfo name="Player 1"  symbol="X" isActive={activePlayer === "X" ?  true : false} />
          <RenderPlayerInfo name="Player 2"  symbol="O" isActive={activePlayer === "O" ?  true : false}/>

        </ol>
        <GameBoard handePlayerChange={handlePlayerChange} selectedSymbol={activePlayer}/>
      </div>
    </main> 
  );
}

export default App;
