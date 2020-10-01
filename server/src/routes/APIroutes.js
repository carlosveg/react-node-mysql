const express = require("express");
const db = require("../db/dbConnection");

const app = express();

app.get("/api/get", (req, res) => {
  const sql = "select * from moviesInfo;";

  db.query(sql, (err, rows) => {
    res.send(rows);
  });
});

app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sql = "insert into moviesInfo (movieName, movieReview) values (?, ?)";

  db.query(sql, [movieName, movieReview], (err, rows) => {
    console.log(err);
    console.log(rows);
  });
});

module.exports = app;
