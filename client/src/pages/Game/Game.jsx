import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gameboard from "../../components/Gameboard/Gameboard";
import styles from "./Game.module.css";


const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPlayer1, setIsPlayer1] = useState(true);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    console.log(location.state)
    if (!location?.state?.players) {
      navigate("/menu");
    }

    setPlayers(location?.state?.players);
  }, []);

  return (
    <div>
    
      <button className={styles.back_button} onClick={() => navigate(-1)}>
        Back to Menu
      </button>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <div className={styles.players_container}>
        <div className={styles.player_details}>
          <p>Player 1</p>
          <p className={styles.player_name} style={{ color: "blue" }}>
            {players?.player1?.name ? players.player1.name : ""} - {players?.player1?.score}
          </p>
        </div>
        <div className={styles.player_details}>
          <p>Player 2</p>
          <p className={styles.player_name} style={{ color: "red" }}>
            {players?.player2 ? players.player2.name : ""} - {players?.player2?.score}
          </p>
        </div>
      </div>
      <div className={styles.board_container}>
        <Gameboard 
        isPlayer1={isPlayer1} 
        setIsPlayer1={setIsPlayer1} 
        players={players}
        setPlayers={setPlayers}
        />
      </div>
    </div>
  );
};

export default Game;
