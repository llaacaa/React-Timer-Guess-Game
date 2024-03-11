import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [player, setPlayer] = useState("");

  const setName = () => {
    setPlayer(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {player ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={setName}>Set Name</button>
      </p>
    </section>
  );
}
