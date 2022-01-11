// Première : alert
alert('Binvenue dans le jeu !');

// Deuxième étape : nombre aléatoire
let nbrAleatoire = Math.floor(Math.random() * 100);
console.log(nbrAleatoire);

// Troixième étape : boucle for
for (i = 0; i <= 6; i++) {
    let nbUser = parseInt(prompt(`Trouvez le numéro mystère, compris entre 0 et 100. Attention, vous n'avez que 6 essais.`));
    if ((nbUser < 0) || (nbUser > 100)) {
        alert(`Vous devez saisir un nombre entre 0 et 100 ! ${i} /6`);
        i--; /* si la personne se trompe ça ne compte pas dans les essais. */
    } else if (isNaN(nbUser)) {
        /* isNaN => n'est pas un nombre (isNotNumber) */
        alert(`Vous devez saisir un NOMBRE ! ${i} /6`);
        i--;
    } else if (nbrAleatoire < nbUser) {
        alert(`Visez plus bas ! ${i} /6`);
    } else if (nbrAleatoire > nbUser) {
        alert(`Visez plus haut ! ${i} /6`);
    } else {
        document.getElementById('p1').innerHTML = `Félicitation, vous avez trouvé la réponse ! Le nombre mystère était ${nbrAleatoire}`;
        break; /* break sert à sortir de la boucle */
    }
    document.getElementById('p1').innerHTML =
        `Dommage vous n'avez pas trouvé la bonne réponse, c'était ${nbrAleatoire}`;
} /* Fin de la boucle aléatoire */