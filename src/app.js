// Import statements
import express from "express";
import path from "path";
import dotenv from "dotenv";

import { home, about, contact, privacy } from "./controllers/pageControllers.js";

// Laad .env-bestand
dotenv.config();

// Maak een express-app
const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

// Serveer statische bestanden uit de "public" map
app.use(express.static("public"));

// page routes
app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/privacy", privacy);

// Poort ophalen uit .env of standaard 3000 gebruiken
const PORT = process.env.PORT || 3000;

// Start de server
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}.`);
});
