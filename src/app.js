// Import statements
import express from "express";
import path from "path";
import dotenv from "dotenv";

// Laad .env-bestand
dotenv.config();

// Maak een express-app
const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

// Serveer statische bestanden uit de "public" map
app.use(express.static("public"));

// GET route voor de home.ejs file
app.get("/", (req, res) => {
  res.render("home", {
    title: "Dinosaurs are awesome",
    content: "hahahhahah",
  });
});

app.get("/about", (req, res) => {
  res.render("home", {
    title: "About",
    content: "page about dinosaurs",
  });
});

// Poort ophalen uit .env of standaard 3000 gebruiken
const PORT = process.env.PORT || 3000;

// Start de server
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}.`);
});
