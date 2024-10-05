import { RenderPlayerInfo } from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          
          {RenderPlayerInfo("Player 1", "X")}
          {RenderPlayerInfo("Player 2", "O")}

        </ol>
      </div>
    </main>
  );
}

export default App;
