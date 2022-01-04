// La fontion random : aléatoire

document.getElementById('p1').innerHTML = Math.floor((Math.random() * 100) + 1);


document.getElementById('p2').innerHTML = Math.floor((Math.random() * 11)); /* Ici on écrit * 11 car ns voulons ls nbres de 0 à 10 ce qui équivaut à 11 nbres ! */

document.getElementById('p3').innerHTML = Math.random();

// Fonction personnalisée
/**
 * Multiplication par 100
 * @returns number
 */
function random() {
    return Math.random() * 100;
}

document.getElementById('p4').innerHTML = `Le nombre généré  est ${randomX100()}`;