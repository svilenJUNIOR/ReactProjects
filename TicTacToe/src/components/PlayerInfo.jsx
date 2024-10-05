import { useState } from "react";

export function RenderPlayerInfo({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

  return (
    <li>
      <span>
        {
        !isEditing 
        ? <span className="player-name">{playerName}</span> 
        : <input type="text" required value={playerName} onChange={(event) => setPlayerName(event.target.value)}/>
        }

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(edit => !edit)}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
