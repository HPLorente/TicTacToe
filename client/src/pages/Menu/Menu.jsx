import React, { useState } from "react";
import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState({
    player1: null,
    player2: null,
  });

  function handlePlayButton() {
    console.log(players);
    if (!players.player1 || !players.player2) {
      console.log("Player name required");
      return;
    }

    navigate("/game", {
      state: {
        players,
      },
    });
  }

  function handleNameChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    console.log(value);
    setPlayers({
      ...players,
      [`${name}`]: value,
    });

    console.log(name);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wanna Play?</h1>

      <div className={styles.input_container}>
        <label>Player 1:</label>
        <input name="player1" onChange={handleNameChange} />
      </div>
      <div className={styles.input_container}>
        <label>Player 2:</label>
        <input name="player2" onChange={handleNameChange}></input>
      </div>
      <button className={styles.play_button} onClick={handlePlayButton}>
        Play Now
      </button>
    </div>
  );
};

export default Menu;
