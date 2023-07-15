import React, { useState } from "react";
import Gameboard from "../../components/Gameboard/Gameboard";
import styles from "./Game.module.css";

const Game = () => {
  const [isPlayer1, setIsPlayer1] = useState(true);

  return (
    <div>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <p>Turn: Player {isPlayer1 ? "1" : "2"}</p>
      <Gameboard isPlayer1={isPlayer1} setIsPlayer1={setIsPlayer1} />
    </div>
  );
};

export default Game;
