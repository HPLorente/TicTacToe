import React from "react";
import styles from "./PlayerTable.module.css";
import moment from "moment-timezone";

const PlayerTable = ({ playerList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <p>
              <span className={styles.mark}> O </span> Player 1
            </p>
          </th>
          <th>
            <p>
              {" "}
              <span className={styles.mark}>X </span> Player 2
            </p>
          </th>
          <th># of Rounds</th>
          <th>Draws</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {playerList &&
          playerList.map((player, index) => (
            <tr key={index}>
              <td data-cell="Player 1">
                {player.player1} <br />
                {player.player1Score} wins
              </td>
              <td data-cell="Player 2">
                {player.player2}
                <br /> {player.player2Score} wins
              </td>
              <td data-cell="Rounds">{player.rounds}</td>
              <td data-cell="Draws">{player.draws}</td>
              <td data-cell="Date">
                {moment(player.date).tz("Asia/Manila").format("ll")}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
