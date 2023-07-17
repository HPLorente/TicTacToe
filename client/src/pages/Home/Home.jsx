import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import axios from "axios";
import HeroImage from "../../assets/logo.svg";
import gameApi from "../../api/Game";
import PlayerTable from "../../components/PlayerTable/PlayerTable";

const Home = () => {
  const navigate = useNavigate();
  const [playerList, setPlayerList] = useState([]);

  const fetchGames = async () => {
    try {
      // Fetch all saved scores in DB
      const { url, method } = gameApi.getAllGames;
      const response = await axios({
        url,
        method,
      });

      setPlayerList(response.data?.games ? response.data.games : []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero_section}>
        <div className={styles.hero_image_container}>
          <img className={styles.hero_image} src={HeroImage} loading="lazy" />
        </div>
        <div className={styles.hero_text_container}>
          <h1 className={styles.title}>
            Master the Art of <span style={{ color: "red" }}> TIC </span>{" "}
            <span style={{ color: "blue" }}> TAC </span>
            <span style={{ color: "red" }}>TOE</span>!
          </h1>
          <h2 className={styles.subtitle}>
            Unleash your strategic genius and outsmart your opponents.
          </h2>
          <p className={styles.description}>
            Welcome to the world of Tic Tac Toe, where strategy meets
            excitement! Whether you're a seasoned player or new to the game,
            this is the perfect place to sharpen your skills and challenge
            opponents from around the globe.
          </p>
          <button
            className={styles.play_button}
            onClick={() => navigate("/menu")}
          >
            🎮 Start New Game!
          </button>
        </div>
      </section>
      <section className={styles.list_section}>
        <h1 className={styles.title}>People who recently played</h1>
        <PlayerTable playerList={playerList} />
      </section>
    </div>
  );
};

export default Home;
