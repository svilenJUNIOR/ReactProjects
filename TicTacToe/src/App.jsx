import { RenderPlayerInfo } from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">

          <RenderPlayerInfo name="Player 1"  symbol="X" />
          <RenderPlayerInfo name="Player 2"  symbol="O" />
          
        </ol>
      </div>
    </main>
  );
}

export default App;
