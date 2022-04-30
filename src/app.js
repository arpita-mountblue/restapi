const express = require("express");
require("./database/conn");
const movie = require("./models/movies");
let dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//create a new movies

app.post("/movies", async (req, res) => {
  try {
    const movieList = new movie(req.body);
    const createMovie = await movieList.save();
    res.status(201).send(movieList);
  } catch (e) {
    res.status(400).send(e);
  }
});

//read the data of movie

app.get("/movies", async (req, res) => {
  try {
    const moviesdata = await movie.find();
    res.send(moviesdata);
  } catch (e) {
    res.send(e);
  }
});

//get the indivisual movie data using id

app.get("/movies/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const moviedata = await movie.findById(_id);

    if (!moviedata) {
      return res.status(404).send();
    } else {
      res.status(500).send(moviedata);
    }
  } catch (e) {
    res.send(e);
  }
});

//update the indivisual movie data using id

app.put("/movies/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMovie = await movie.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateMovie);
  } catch (e) {
    res.status(404).send(e);
  }
});

// delete the movie by it's id

app.delete("/movies/:id", async (req, res) => {
  try {
    const deleteMovie = await movie.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteMovie);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
