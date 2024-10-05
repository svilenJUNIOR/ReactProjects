export function RenderPlayerInfo({name, symbol}) {
  return (
    <li>
      <span>
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>EDIT</button>
    </li>
  );
}
