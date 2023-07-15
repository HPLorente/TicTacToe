import React, { useState } from "react";
import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState({
    player1: {
      name: '',
      score: 0
    },
    player2: {
      name: '',
      score: 0
    },
  });

  function handlePlayButton() {
    if (!players.player1 || !players.player2) {
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

    setPlayers({
      ...players,
      [`${name}`]: {
        name: value,
        score: 0
      },
    });

  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wanna Play Tic Tac Toe?</h1>

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
