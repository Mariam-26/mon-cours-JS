// on déclare deux variables globales

let x = 5;
let y = 10;

function portee1() { // 1ère fonction avec des variables globales

    document.getElementById('p1').innerHTML = 'Depuis portee1() dont les éléments sont déclarés globalement, x = ' + x + ' et y = ' + y;
}

portee1();

function portee2() {

    // notre deuxième fonction avec des variables locales

    let a = 1;
    var b = 2;

    document.getElementById('p2').innerHTML = 'Depuis portee2(), dont les éléments sont déclarées localement, a =' + a + ' et b = ' + b;
}
portee2();


function portee3() { // notre troisième fonction avec des variables locales qui portent le même nom que les variables globales (l.2&3). Bine qu'elles s'appellent de la même façon, ce sont des entités complètement différentes 

    let x = 20;
    let y = 40;

    document.getElementById('p3').innerHTML = 'Depuis portee3(), x est égal à ' + x + '  et y est égal à ' + y;

}
portee3();

// Ce sont les variables déclarées dans l'espace locale qui prennent le dessus sur celles déclarées dans l'espagne global

// on affiche les variables globales
document.getElementById('p4').innerHTML = 'j\'affiche les variables déclarées globalement : x = ' + x + ' et y est égal à ' + y;

// on essaye d'afficher les variables locales 

/* document.getElementById('p5').innerHTML = ' Depuis l'espace globalThis, a = ' + a + ' et b =' +b;' */

/* Cette dernière instruction ne peut pas être exécutée car a et b sont des variables locales, elles ne sont donc pas définies globalement */