let nbr1 = parseFloat(prompt('Saisissez un premier nombre!'));
let nbr2 = parseFloat(prompt('Saisissez un deuxièpe nombre!'));
// ParseFloat , j'accepte les nombres et les nombres décimaux

console.log(nbr1, nbr2);


if (nbr1 == nbr2) {
    document.querySelector('#p1').innerHTML = 'le premier nombre que vous avez saisi ' + nbr1 + ', est égal au second nombre' + nbr2;

} else if (nbr1 > nbr2) {
    document.querySelector('#p1').innerHTML = 'le premier nombre que vous avez saisi ' + nbr1 + ', est supérieur  au second nombre' + nbr2;

} else if (nbr1 < nbr2) {
    document.querySelector('#p1').innerHTML = 'le premier nombre que vous avez saisi ' + nbr1 + ', est inférieur  au second nombre' + nbr2;
} else {
    document.querySelector('#p1').innerHTML = 'Attention , nous avons dit des nombres!';

}