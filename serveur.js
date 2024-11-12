import cors from "cors"; // Module pour activer CORS signifie (Cross-Origin Resource Sharing).
import express from "express"; // Module pour créer des applications web en Node.js. Express est un framework pour Node.js
import http from "http"; // Module pour créer un serveur HTTP. Inclus dans Node.js
import path from "path"; // Module pour gérer les chemins de fichiers. Inclus dans Node.js
import { fileURLToPath } from "url"; // Module pour convertir une URL en chemin de fichier. Inclus dans Node.js
import cocktailsRouter from "./serveur/routes/api/v1/cocktails.js";
const app = express();

const PORT = 3000;
const HOTE = "127.0.0.1";


const serveur = http.createServer(app);



// Obtenir __dirname en modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "client")));
// Support json encoded bodies

app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(cors());
app.use(express.json());

// ****************************** LES ROUTES DE TRAITEMENT DES REQUÊTES ************************************

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "client", "pages", "index.html")); // Chemin absolu vers index.html
});

// ROUTES COCKTAILS

app.get("/api/v1/cocktails", cocktailsRouter);

// ****************************** FINS DES ROUTES ************************************

serveur.listen(PORT, HOTE, () => {
  console.log(`Serveur démarré sur http://${HOTE}:${PORT}`);
});

