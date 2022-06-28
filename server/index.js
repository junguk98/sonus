const express = require("express");
const { user, generateDummyCards, generateDummyMusics } = require("./moke");

const app = express();

app.use(express.json());

app.post("/api/user/1", (req, res) => {
  setTimeout(() => {
    res.json(user);
  }, 1000);
});

app.post("/api/user/", (req, res) => {});

app.get("/api/cards", (req, res) => {
  setTimeout(() => {
    res.json(generateDummyCards(30));
  }, 1000);
});

app.get("/api/musics", (req, res) => {
  setTimeout(() => {
    const limit = Number(req.query.limit);
    const offset = Number(req.query.offset);
    res.json(generateDummyCards(limit, offset));
  }, 1000);
});

app.listen(8080, () => {
  console.log("Backend server is running!");
});
