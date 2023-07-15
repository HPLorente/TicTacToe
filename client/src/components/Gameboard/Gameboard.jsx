import React, { useState } from "react";
import styles from "./Gameboard.module.css";

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

const Gameboard = ({ isPlayer1, setIsPlayer1 }) => {
  const [tiles, setTiles] = useState(tilesInfo);
  const [numMarked, setNumMarked] = useState(0);
  const [winner, setWinnner] = useState(null);

  function checkVertical(col) {
    let winner = false;
    const mark = tiles[index].mark;
    if (col === 1) {
      if (tiles[0].mark === mark && tiles[6] === mark) {
        winner = true;
      }
    }

    if (col === 3) {
      if (tiles[0].mark === mark && tiles[6] === mark) {
        winner = true;
      }
    }

    setWinnner(isPlayer1 ? "Player 1" : "Player 2");
  }

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
    const newTiles = structuredClone(tiles);
    newTiles[index].marked = true;
    newTiles[index].mark = isPlayer1 ? "O" : "X";
    setNumMarked(numMarked + 1);
    setTiles(newTiles);
    const hasWinner = checkWinner(newTiles, index);
    console.log("Has winner? ", hasWinner);

    setIsPlayer1(!isPlayer1);
  }

  return (
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
  );
};

export default Gameboard;
