
const creerCard = (cocktail) => {
    return `<div class="card" style="width: 18rem;">
            <img src="images/${cocktail.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cocktail.nom}</h5>
                <p class="card-text">${cocktail.type}</p>
                <p class="card-text">${cocktail.ingredients.join(",")}</p>
                <p class="card-text">${cocktail.prix} $</p>
            </div>
            </div>`;
}



const afficherListeFilmsCards = (listeFilms) => {
    let listeCards = "";
    for (const film of listeFilms) {
      listeCards += creerCard(film);
    }
    document.getElementById("contenu").innerHTML = listeCards;
 }

export { afficherListeFilmsCards };