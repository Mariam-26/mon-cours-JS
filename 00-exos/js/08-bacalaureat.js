let note = parseFloat(prompt('Quelle note avez vous obetnu au baccalauréat ?'));

console.log(note);

if ((note < 10) && (note > 0)) {
    document.querySelector('#p1').innerHTML = 'votre notre est  ' + note + ', vous êtes recalé .';

} else if (note >= 10 && note < 12) {
    document.querySelector('#p1').innerHTML = 'votre notre est  ' + note + ', vous obtenez le baccalauréat .';

} else if (note >= 12 && note < 14) {

    document.querySelector('#p1').innerHTML = 'votre notre est  ' + note + ', vous obtenez le baccalaureat avec mention .';


} else if (note >= 14 && note < 16) {
    document.querySelector('#p1').innerHTML = 'votre notre est  ' + note + ', vous obtenez le baccalaureat avec mention bien .';

} else if (note >= 16 && note < 18) {

    document.querySelector('#p1').innerHTML = 'votre notre est  ' + note + ', vous obtenez le baccalaureat avec la mention très bien.';

} else if (note >= 18 && note <= 20) {
    document.querySelector('#p1').innerHTML = 'votre notre est  ' + note + ', vous obtenez le baccalaureat avec les félicitations du jury.';
} else {

    document.querySelector('#p1').innerHTML = 'vous devez saisir une note entre 0 et 20.';
}