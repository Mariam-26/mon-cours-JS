// 1ere etape : alert

alert('Bienvenue dans le jeu !');

//2eme étape : nom aléatoire

var nbrAleatoire = Math.floor(Math.random() *
    100);
console.log(nbrAleatoire);

//3eme etape : boucle for

for (var i = 1; i <= 6; i++) {

    var nbUser = parseInt(prompt('Trouvez le numéro mystère, compris entre 0 et 100. Attention, vous n\'avez que 6 essais'));
    if ((nbUser < 0) || (nbUser > 100)) {

        alert('vous devez saisir un nombre entre 0 et 100!' + i + '/6');
        i--;

        /*si l'utilisateur se trompe ça ne compte pas dans les essais*/
    } else if (isNaN(nbUser)) { //* isNan n'est pas un nombre (isNotaNumber)*/
        alert('Vous devez saisir un NOMBRE ! ' + i + '/6');
        i--;

    } else if (nbrAleatoire < nbUser) {
        alert('Visez plus bas !' + i + '/6');

    } else if (nbrAleatoire > nbUser) {
        alert('Visez plus haut !' + i + '/6');
    } else {
        document.getElementById('p1').innerHTML = 'Félicitation, vous avez trouvé la réponse! Le nombremystère était ' + nbrAleatoire;
        break; /* break sert à sortir de la boucle*/
    }

    document.getElementById('p1').innerHTML = 'Dommage vous avez échoué! la bonne réponse ,c\'était ' + nbrAleatoire;

} /* fin de la boucle aléatoir*/