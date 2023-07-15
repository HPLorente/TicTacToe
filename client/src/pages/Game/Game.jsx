import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Gameboard from "../../components/Gameboard/Gameboard";
import styles from "./Game.module.css";

const Game = () => {
  const location = useLocation();
  const [isPlayer1, setIsPlayer1] = useState(true);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    console.log(`Location is `, location);
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <p>Turn: Player {isPlayer1 ? "1" : "2"}</p>
      <Gameboard isPlayer1={isPlayer1} setIsPlayer1={setIsPlayer1} />
    </div>
  );
};

export default Game;
