import { RenderPlayerInfo } from "./components/PlayerInfo";
import { GameBoard } from "./components/GameBoards";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">

          <RenderPlayerInfo name="Player 1"  symbol="X" />
          <RenderPlayerInfo name="Player 2"  symbol="O" />

        </ol>
        <GameBoard/>
      </div>
    </main> 
  );
}

export default App;
