let mois = parseInt(prompt('Choisissez un mois', 'Saisir un nombre entre 1et 12 '));
/*
if (isNaN(mois)) { // isNan => is not a number => chîne de caractère
    document.getElementById('p1').innerHTML = ' Vous devez saisir un nombre !';
    
}else if (mois == 1 || mois == 2 || mois == 3 || mois == 5 || mois == 7 || mois == 8|| mois == 10 || mois == 12 ) {
    document.getElementById( 'p1').innerHTML = 'Le mois numéro ' + mois + ' fait 31 jours';

}else if ( mois == 4 || mois == 6 || mois== 9 || mois == 11){
    document.getElementById( 'p1').innerHTML = 'Le mois numéro ' + mois + ' fait 30 jours';
}else if (mois == 2){
    document.getElementById( 'p1').innerHTML = 'Le mois numéro ' + mois + ' fait 28 jours';
} else{
    document.getElementById( 'p1').innerHTML = 'il n\'y a que 12 mois dans l\'année.';
}
 */


let moisNom = ['janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre', ]


/*ICI on a crée un tableau (array)  avec les mois de l'annéee!!! ATTENTION un tableau commence à 0.
il faut donc considérer que janvier == 0*/

console.log(moisNom[0]);


if (isNaN(mois)) { /*  si c'est une string exécute çà*/
    document.getElementById('p1').innerHTML = ' Vous devez saisir un nombre !';

} else { /* Sinon c'es un nombre*/

    if (mois === 2) {
        document.getElementById('p1').innerHTML = 'le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ', il fait 28 jours.';

    } else if (mois === 4 || mois === 6 || mois === 9 || mois === 11) {
        document.getElementById('p1').innerHTML = 'le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ', il fait 30 jours.'


    } else if (mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12) {
        document.getElementById('p1').innerHTML = 'le mois numéro ' + mois + ', ' + moisNom[mois - 1] + ', il fait 31 jours.';

    } else {
        document.getElementById('p1').innerHTML = ' vous devez saisir un nombre entre & et 12 !'
    }
}