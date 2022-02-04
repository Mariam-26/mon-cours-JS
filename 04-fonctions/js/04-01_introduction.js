// La fontion random : aléatoire

document.getElementById('p1').innerHTML = Math.floor((Math.random() * 100) + 1);


document.getElementById('p2').innerHTML = Math.floor((Math.random() * 11)); /* Ici on écrit * 11 car ns voulons ls nbres de 0 à 10 ce qui équivaut à 11 nbres ! */

document.getElementById('p3').innerHTML = Math.random();

// Fonction personnalisée
/**
 * Multiplication par 100
 * @returns float
 */
function randomX100() {
    return Math.random() * 100;
}

document.getElementById('p4').innerHTML = `Le nombre généré  est ${randomX100()}`;

// Exemple de fonction personnalisée  avec multiplier

function multiplier(nbr1, nbr2) {
    return (`Multiplications : ${nbr1}X${nbr2}=${nbr1 * nbr2}`);
}

document.querySelector('#p5').innerHTML = multiplier(20, 5);

// Faire la même chose avec addition : 78 et 2 

// Soustraire 45 et 41 / Division 20 et 5 / Modulo 20 et 5



// Soustraction

function soustraction(nbr1, nbr2) {
    return ('Soustraction : ' + nbr1 + '-' + nbr2 + '=' + (nbr1 - nbr2));
}

document.querySelector('#p6').innerHTML = soustraction(45, 41);

// Division

function division(nbr1, nbr2) {
    return ('Division : ' + nbr1 + '/' + nbr2 + '=' + (nbr1 / nbr2));
}

document.querySelector('#p7').innerHTML = division(20, 5);

// Modulo

function Modulo(nbr1, nbr2) {
    return ('Le modulo : ' + nbr1 + '%' + nbr2 + '=' + (nbr1 % nbr2));
}

document.querySelector('#p8').innerHTML = Modulo(20, 5);

// Addition

function addition(nbr1, nbr2) {
    return ('Addition : ' + nbr1 + '+' + nbr2 + '=' + (nbr1 + nbr2));
}

document.querySelector('#p9').innerHTML = multiplier(78, 2);