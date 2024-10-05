import { useState } from "react";

export function RenderPlayerInfo({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false)

  return (
    <li>
      <span>
        {!isEditing ? <span className="player-name">{name}</span> : <input></input> }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(true)}>EDIT</button>
    </li>
  );
}
