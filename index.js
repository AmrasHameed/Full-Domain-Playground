const express = require("express");
const path = require("path");
const { exec } = require("child_process");
const url = "https://www.youtube.com/";
cmdCommand = `start chrome /new-tab ${url}`;

const app = express();
// app.use(express.static(__dirname));

app.get("/", (req, res) => {
  exec(cmdCommand);

  res.send('<h1>Home</h1><a href="/about"><button>About</button></a>');
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
