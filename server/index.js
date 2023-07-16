const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 80;

// Routes
const gameRoutes = require("./routes/Game");

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/games", gameRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://ypoy:Hplorente26@tictactoe.nvqjjqp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(
    () => {
      console.log("Mongoose Connected!");
    },
    (err) => {
      console.log("Mongoose Error occured");
    }
  );

app.listen(PORT, () => {
  console.log(`Listening on Port ${80}`);
});
