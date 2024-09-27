import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const numberOfLetters = req.body["fName"].trim().length + req.body["lName"].trim().length;
  res.render("index.ejs",
    {count : numberOfLetters
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
