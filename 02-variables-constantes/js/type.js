// le JS pour la page 02-03 type.html

// string

let presentation = "Je m'appelle Michaël";
let age = 21;

console.log(typeof presentation, typeof age);
// La fonction "typeof" va nous indiquer le type de donnés contenu dans titre variable

document.querySelector("#p1").innerHTML =
  "Type de donnée pour la variable presentation : " + typeof presentation;

document.querySelector("#p2").innerHTML = presentation;

document.querySelector('#p3').innerHTML = '<b>Type de donnée</b> pour la variable âge : ' + typeof age;

// Booléen

let touf = 8 > 4;
document.getElementById('p4').innerHTML = 'Type de donnée pour la variable touf : ' + typeof touf;

let calcul1 = 12 + 25 == 46;
let calcul2 = 3250 * 65 == 211250;
let calcul3 = 58 + 32 == 4;

console.log(calcul1, calcul2, calcul3);

let a = 22;
let b = 33;
let c = 1028;
let c = 1032;

let x = a + b;
let y = a - b * c;
let z = c % b;

console.log(x, y, z);