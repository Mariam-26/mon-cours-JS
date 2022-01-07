let nbrUser = 0;

while (
    (nbrUser < 50) || (nbrUser > 100)) {
    nbrUser = prompt('Entrez un nombre entre 50 et 100 !');

    document.getElementById('p1').innerHTML = 'votre nombre est entre 50 et 100 ';
}