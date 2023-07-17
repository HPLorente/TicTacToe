import React, { useState } from "react";
import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";
import TicTacToeImage from "../../assets/tic-tac-toe.png";

const Menu = () => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState({
    player1: {
      name: "",
      score: 0,
    },
    player2: {
      name: "",
      score: 0,
    },
    draws: 0,
  });
  const [showError, setShowError] = useState(false);

  function handlePlayButton() {
    // If either has no name, then do not continue
    if (!players.player1.name || !players.player2.name) {
      setShowError(true);
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

    // Set player names
    setPlayers({
      ...players,
      [`${name}`]: {
        name: value,
        score: 0,
      },
    });
  }

  return (
    <div className={styles.container}>
      <img alt="Tic Tac Toe" src={TicTacToeImage} className={styles.image} />
      <h1 className={styles.title}>Play Tic Tac Toe</h1>
      <div className={styles.inputs_container}>
        <div className={styles.input_container}>
          <label>Player 1:</label>
          <input name="player1" onChange={handleNameChange} />
        </div>
        <div className={styles.input_container}>
          <label>Player 2:</label>
          <input name="player2" onChange={handleNameChange}></input>
        </div>
      </div>
      {showError && (
        <p className={styles.error_text}>
          Please enter the names for both players.
        </p>
      )}

      <div className={styles.button_container}>
        <button className={styles.play_button} onClick={handlePlayButton}>
          🚀 Let's Go!
        </button>
      </div>
    </div>
  );
};

export default Menu;
