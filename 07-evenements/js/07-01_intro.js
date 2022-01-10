// evènement avec une fonction

document.querySelector('#rouge').addEventListener('click, fdivRouge'); /* Je sélectionne la div par son ID et j'ajoute un écouter d'évènement qui s'exécutera au moment ou ma fonction est lancée. .addEvenlistener() à besoin de 2 arguments pr fonctionner => 1. le mot clef correspondant (click / dblclick / etc.) et 2. le nom de la fonction si la fonction est nomée ou le début de ma fonction si elle est anonyme.  */
document.querySelector('#rouge').style.cursor = 'pointer';

function fdivRouge() {
    // alert('Coucou, tu as cliqué sur moi !');
    this.innerHTML = '#gold';
    this.style.background = 'gold';
    this.style.borderRadius = '15%';
    this.style.textTransform = 'uppercase';
}

// Fonction anonyme
document.querySelector('#p1').addEventListener('click', function() {
    this.style.background = 'gold';
    this.style.innerHTML = 'Je suis devenu doré !';
    this.style.textAlign = 'center';
})


// Version avec une variable
let maDivOrange = document.querySelector('#orange');
maDivOrange.style.cursor = 'pointer';
maDivOrange.addEventListener('dblclick', fdivOrange); /* dblclick = double-click */



function fdivOrange() {
    // alert('Coucou, tu as cliqué sur moi !');
    this.innerHTML = '#gold';
    this.style.background = 'gold';
    this.style.borderRadius = '15%';
    this.style.textTransform = 'uppercase';
}

document.querySelector('#p2').addEventListener('dblclick', function() {
    this.style.background = 'gold';
    this.style.innerHTML = 'Je suis devenu doré !';
    this.style.textAlign = 'center';
})

// Ici on cache la div verte lorsque l'on ne survole plus => mouseout
document.querySelector('#vert').addEventListener('mouseout, fdivVert'); /* Je sélectionne la div par son ID et j'ajoute un écouter d'évènement qui s'exécutera au moment ou ma fonction est lancée. .addEvenlistener() à besoin de 2 arguments pr fonctionner => 1. le mot clef correspondant (click / dblclick / etc.) et 2. le nom de la fonction si la fonction est nomée ou le début de ma fonction si elle est anonyme.  */
document.querySelector('#vert').style.cursor = 'pointer';

function fdivVert() {
    // alert('Coucou, tu as cliqué sur moi !');
    this.innerHTML = '#gold';
    this.style.background = 'gold';
    this.style.borderRadius = '15%';
    this.style.textTransform = 'uppercase';
}

// Fonction anonyme
document.querySelector('#p3').addEventListener('mouseout', function() {
    this.style.background = 'gold';
    this.style.innerHTML = 'Je suis devenu doré !';
    this.style.textAlign = 'center';
})




document.querySelector('#rouge').addEventListener('click, fdivRouge'); /* Je sélectionne la div par son ID et j'ajoute un écouter d'évènement qui s'exécutera au moment ou ma fonction est lancée. .addEvenlistener() à besoin de 2 arguments pr fonctionner => 1. le mot clef correspondant (click / dblclick / etc.) et 2. le nom de la fonction si la fonction est nomée ou le début de ma fonction si elle est anonyme.  */
document.querySelector('#rouge').style.cursor = 'pointer';

function fdivRouge() {
    this.innerHTML = '#gold';
    this.style.background = 'gold';
    this.style.borderRadius = '15%';
    this.style.textTransform = 'uppercase';
}

// Fonction anonyme
document.querySelector('#p3').addEventListener('mouseEnter', function() {
    this.style.background = 'gold';
    this.style.innerHTML = 'Je suis devenu doré !';
    this.style.textAlign = 'center';
})

// Le formulaire