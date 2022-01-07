let heure = parseInt(prompt(`Entrez l'heure`));
let minute = parseInt(prompt(`Entrez le minutes`));
let seconde = parseInt(prompt(`Entrez les secondes`));

// On affiche l'heure donnée par l'utilisateur

document.getElementById('p1').innerHTML = `Il est actuellement ${heure}h ${minute}min ${seconde}sec.`;

// On affiche l'heure + 1 seconde

if ((heure >= 0) && (heure <= 23) &&
    (minute >= 0) && (minute <= 59) &&
    (seconde >= 0) && (seconde <= 59)) {
    seconde++;
    if (seconde === 60) {
        seconde = 0;
        munite++;
        if (minute === 60) {
            munite = 0;
            heure++;
            if (heure === 24) {
                heure = 0;
            }
        }
    }
    document.getElementById('p2').innerHTML = `Dans une seconde Il sera ${heure}h ${minute}min ${seconde}sec.`;
} else {
    document.getElementById('p2').innerHTML = `Il est faut rentrer une heure valide !`
}