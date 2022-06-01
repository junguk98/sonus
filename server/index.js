const express = require("express");
const { user, generateDummyCards, generateDummyMusics } = require("./moke");

const app = express();

app.use(express.json());

app.get("/api/user/1", (req, res) => {
  setTimeout(() => {
    res.json(user);
  }, 1000);
});

app.get("/api/cards", (req, res) => {
  setTimeout(() => {
    res.json(generateDummyCards(10));
  }, 1000);
});

app.get("/api/musics", (req, res) => {
  setTimeout(() => {
    res.json(generateDummyMusics(50));
  }, 1000);
});

app.listen(8080, () => {
  console.log("Backend server is running!");
});
