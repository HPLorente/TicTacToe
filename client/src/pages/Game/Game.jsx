import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gameboard from "../../components/Gameboard/Gameboard";
import styles from "./Game.module.css";
import gameApi from "../../api/Game";
import axios from "axios";

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPlayer1, setIsPlayer1] = useState(true);
  const [round, setRound] = useState(1);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    console.log(location.state);
    if (!location?.state?.players) {
      navigate("/menu");
    }

    setPlayers(location?.state?.players);
  }, []);

  async function handleQuit() {
    try {
      if (round > 0) {
        // Calculate number of draws
        const response = await axios({
          url: gameApi.addGame.url,
          method: gameApi.addGame.method,
          data: {
            player1: players.player1.name,
            player2: players.player2.name,
            player1Score: players.player1.score,
            player2Score: players.player2.score,
            rounds: round - 1,
            draws: players.draws,
          },
        });
      }

      navigate("/");
    } catch (err) {
      console.log(err);
      return;
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={handleQuit} className={styles.back_button}>
        ❗Stop Game
      </button>
      <h1 className={styles.title}>Tic Tac Toe</h1>
      <h3 className={styles.title}>Round: {round}</h3>
      <h3 className={styles.title}>Draws: {players?.draws}</h3>
      <div className={styles.players_container}>
        <div className={styles.player_details}>
          <p>Player 1</p>
          <p className={styles.player_name} style={{ color: "blue" }}>
            {players?.player1?.name ? players.player1.name : ""} -{" "}
            {players?.player1?.score}
          </p>
        </div>
        <div className={styles.player_details}>
          <p>Player 2</p>
          <p className={styles.player_name} style={{ color: "red" }}>
            {players?.player2 ? players.player2.name : ""} -{" "}
            {players?.player2?.score}
          </p>
        </div>
      </div>
      <div className={styles.board_container}>
        <Gameboard
          isPlayer1={isPlayer1}
          setIsPlayer1={setIsPlayer1}
          players={players}
          setPlayers={setPlayers}
          round={round}
          setRound={setRound}
        />
      </div>
    </div>
  );
};

export default Game;
