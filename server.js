const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/", async (req, res) => {
  try {
    console.log("passou aqui");
    const { data } = await axios("https://pokeapi.co/api/v2/pokemon/");
    console.log(data);
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen("4567");
