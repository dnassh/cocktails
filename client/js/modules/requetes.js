import { afficherListeFilmsCards } from "./affichage.js";

const requeteListerFilms = () => {
    fetch("http://localhost:3000/api/v1/cocktails")
      .then(reponse => reponse.json())
      .then(listeFilms => {
        afficherListeFilmsCards(listeFilms);
      })
      .catch((error) => console.error(error));
}

export { requeteListerFilms };
