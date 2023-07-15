import React, { useState } from "react";
import styles from "./Gameboard.module.css";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { useNavigate } from "react-router-dom";

const tilesInfo = [
  { row: 1, col: 1, index: 1, marked: false, mark: "", number: 8 },
  { row: 1, col: 2, index: 2, marked: false, mark: "", number: 3 },
  { row: 1, col: 3, index: 3, marked: false, mark: "", number: 4 },
  { row: 2, col: 1, index: 4, marked: false, mark: "", number: 1 },
  { row: 2, col: 2, index: 5, marked: false, mark: "", number: 5 },
  { row: 2, col: 3, index: 6, marked: false, mark: "", number: 9 },
  { row: 3, col: 1, index: 7, marked: false, mark: "", number: 6 },
  { row: 3, col: 2, index: 8, marked: false, mark: "", number: 7 },
  { row: 3, col: 3, index: 9, marked: false, mark: "", number: 2 },
];

const Gameboard = ({ isPlayer1, setIsPlayer1, players, setPlayers }) => {
  const [tiles, setTiles] = useState(tilesInfo);
  const [numMarked, setNumMarked] = useState(0);
  const [showWin, setShowWin] = useState(false);
  const [hasWinner, setHasWinner] = useState(false)
  const navigate = useNavigate()

  
  function checkWinner(newTiles, index) {
    // Lessen the time of checking
    let winner = false;
    if (numMarked < 4) return winner;

    let marker = isPlayer1 ? "O" : "X";

    // Check horizontally
    let sum = 0;
    for (let row = 0; row < newTiles.length; row += 3) {
      for (let col = 0; col < 3; col++) {
        if (newTiles[row + col].mark !== marker) {
          continue;
        }
        sum += newTiles[row + col].number;
      }

      if (sum === 15) {
        winner = true;
        return winner;
      }
      sum = 0;
    }

    // Check Vertically
    sum = 0;
    for (let col = 0; col < 3; col += 1) {
      for (let row = 0; row < newTiles.length; row += 3) {
        if (newTiles[row + col].mark !== marker) {
          continue;
        }
        sum += newTiles[row + col].number;
      }

      if (sum === 15) {
        winner = true;
        return winner;
      }
      sum = 0;
    }

    // Check Diagonally
    if (newTiles[4].mark === marker) {
      if (
        (newTiles[0].mark === marker && newTiles[8].mark === marker) ||
        (newTiles[2].mark === marker && newTiles[6].mark === marker)
      ) {
        winner = true;
      }
    }

    return winner;
  }

  function handleTileClick(index) {
    // Create a copy of the tiles array
    const activePlayer = isPlayer1? 'player1':'player2'
    const clonedPlayers = structuredClone(players)
    const newTiles = structuredClone(tiles);
    newTiles[index].marked = true;
    newTiles[index].mark = isPlayer1 ? "O" : "X";

    const addedMarked = numMarked + 1

    setNumMarked(addedMarked);
    setTiles(newTiles);
    const hasWinner = checkWinner(newTiles, index);
    
    if(hasWinner) {
      setHasWinner(true)
      setShowWin(true)
      clonedPlayers[`${activePlayer}`].score += 1
      setPlayers(clonedPlayers)
      return
    }

    if(addedMarked === 9 && !hasWinner) {
      setHasWinner(false)
      setShowWin(true)
      return
    }

    setIsPlayer1(!isPlayer1);
  }

  function handleQuit() {
    navigate('/menu')
  } 

  function handleNextround() {  
    setTiles(tilesInfo)
    setNumMarked(0)
    setShowWin(false)
  }

  return (
    <>
      <Rodal 
      visible={showWin}
      showCloseButton={false}
      animation={"zoom"}
      duration={200}
      closeMaskOnClick={false}
      onClose={() => setShowWin(false)}>
        <div className={styles.modal_content_container}>
          {hasWinner? <p 
          className={styles.win_text}> 🥳🥳 {isPlayer1? players?.player1.name: players.player2.name} won the game! 🎉🎉 </p>: <p  className={styles.win_text}>🤝 The game is a draw! 🤝</p>}          
          <div className={styles.buttons_container}>
            <button onClick={handleQuit}>Quit</button>
            <button onClick={handleNextround}>Next Round</button>
          </div>
        </div>
      </Rodal>
    <div className={styles.board}>
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`${styles.tile}`}
          onClick={() => {
            if (tile.marked) return;
            handleTileClick(index);
          }}
          style={{ cursor: tile.marked ? "not-allowed" : "pointer" }}
        >
          <p style={{ color: tile.mark === "O" ? "blue" : "red" }}>
            {tile.mark}
          </p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Gameboard;
