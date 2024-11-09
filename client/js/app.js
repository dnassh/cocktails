import { requeteListerFilms } from "./modules/requetes.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Attendre que le DOM soit chargé
  // Récupérer la liste des cocktails
  let liste = await requeteListerFilms();
});
