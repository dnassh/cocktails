import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cocktailsRouter = Router();
const cheminFichierJSON = path.join(__dirname,"..","donnees", "cocktails.json");

console.log(cheminFichierJSON);
cocktailsRouter.get("/", (req, res) => {
    res.sendFile(cheminFichierJSON);
});

cocktailsRouter.get("/:id", (req, res) => {
    res.json({
        id: 122,
        price: 12.5
    })
});

// Exporter le router pour utilisation dans le fichier serveur
export default cocktailsRouter;
