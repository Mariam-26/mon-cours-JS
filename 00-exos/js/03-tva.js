let ht = Number('HT');
let prixHT = prompt(`Quel est le lprix de votre objet, hors taxe ?`);

let prixTTC = prixHT * 1.20;
document.querySelector('#p1').innerHTML = `Le prix de votre objet hors taxe est de ` + prixHT + `€. Avec la TVA de 20%, le prix sera` + prixTTC + '€.';


