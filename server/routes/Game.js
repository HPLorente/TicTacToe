const express = require("express");
const router = express.Router();
const { addGame, getAllGames } = require("../controllers/Game");

// GET all Games
router.get("/", getAllGames);

// CREATE a game
router.post("/", addGame);

module.exports = router;
