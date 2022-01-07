let nbrUser = 0;

while (
    nbrUser < 50 || nbrUser > 100) {
    nbrUser = Number(prompt('Saisissez un nombre compris entre 50 et 100 !'));

    document.getElementById('p1').innerHTML = `Le nombre récupéré est le ${nbrUser}`;
}