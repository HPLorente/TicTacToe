const Game = require("../models/Game");
const moment = require("moment-timezone");

const addGame = async (req, res) => {
  try {
    const data = req.body;

    await Game.create({
      player1: data.player1,
      player2: data.player2,
      player1Score: data.player1Score,
      player2Score: data.player2Score,
      rounds: data.rounds,
      draws: data.draws,
    });

    console.log(
      "Date is ",
      moment.tz("Asia/Manila").startOf("day").utcOffset(8)
    );

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find().sort([["date", "desc"]]);

    res.status(200).json({
      games,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  addGame,
  getAllGames,
};
