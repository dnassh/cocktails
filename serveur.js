import cors from "cors"; // Module pour activer CORS signifie (Cross-Origin Resource Sharing).
import express from "express"; // Module pour créer des applications web en Node.js. Express est un framework pour Node.js
import http from "http"; // Module pour créer un serveur HTTP. Inclus dans Node.js
import path from "path"; // Module pour gérer les chemins de fichiers. Inclus dans Node.js
import { fileURLToPath } from "url"; // Module pour convertir une URL en chemin de fichier. Inclus dans Node.js

const app = express();

const PORT = 3000;
const HOTE = "127.0.0.1";

// Créer un serveur HTTP en utilisant http.createServer et passer l'application Express
const serveur = http.createServer(app);

// Démarrer le serveur
serveur.listen(PORT, HOTE, () => {
  console.log(`Serveur démarré sur http://${HOTE}:${PORT}`);
});

// ****************************** LES MIDDLEWARES ************************************
// Chemin absolu vers le fichier films.json
// __dirname est une variable globale qui contient le chemin absolu du dossier du script actuel
// __filename est une variable globale qui contient le chemin absolu du fichier du script actuel

// Obtenir __dirname en modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cheminFichier = path.join(__dirname, "serveur", "donnees", "cocktails.json");

// Middleware pour les fichiers statiques
// Sert les fichiers HTML, CSS, JS, et images depuis le dossier client
app.use(express.static(path.join(__dirname, "client")));
// Support json encoded bodies

app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(cors());
app.use(express.json());

// ****************************** LES ROUTES DE TRAITEMENT DES REQUÊTES ************************************

// Définir une route pour servir le fichier index.html situé en dehors du dossier public
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "client", "pages", "index.html")); // Chemin absolu vers index.html
});

app.get("/cocktails", async (req, res) => {
  res.sendFile(path.join(__dirname, "serveur", "donnees", "cocktails.json"));
});

// ****************************** FINS DES ROUTES ************************************


