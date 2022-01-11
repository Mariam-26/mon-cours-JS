// evènement avec une fonction

document.querySelector('#rouge').addEventListener('click', fdivrouge); /* Je sélectionne la div par son ID et j'ajoute un écouter d'évènement qui s'exécutera au moment ou ma fonction est lancée. .addEvenlistener() à besoin de 2 arguments pr fonctionner => 1. le mot clef correspondant (click / dblclick / etc.) et 2. le nom de la fonction si la fonction est nomée ou le début de ma fonction si elle est anonyme.  */
document.querySelector('#rouge').style.cursor = 'pointer';

function fdivrouge() {
    // alert('Coucou, tu as cliqué sur moi !');
    this.innerHTML = '#gold';
    this.style.background = 'gold';
    this.style.borderRadius = '15%';
    this.style.textTransform = 'uppercase';
}

// Fonction anonyme
document.querySelector('#p1').addEventListener('click', function() {
    this.style.background = 'gold';
    this.innerHTML = 'Je suis devenu doré !';
    this.style.textAlign = 'center';
})


// Version avec une variable
let maDivOrange = document.querySelector('#orange');
maDivOrange.style.cursor = 'pointer';
maDivOrange.addEventListener('dblclick', fDivOrange); /* dblclick = double-click */

function fDivOrange() {
    this.innerHTML = '#gold';
    this.style.background = 'gold';
    this.style.borderRadius = '15%';
    this.style.textTransform = 'uppercase';
}

document.querySelector('#p2').addEventListener('dblclick', function() {
    this.style.background = 'gold';
    this.innerHTML = 'Je suis devenu doré !';
    this.style.textAlign = 'center';
})

// La div jaune => au survol (mouseover)
document.getElementById('jaune').addEventListener('mouseover', fDivJaune);

function fDivJaune() {
    this.innerHTML = '#gold';
    this.style.background = 'gold';
    this.style.borderRadius = '15%';
    this.style.textTransform = 'uppercase';
}




// Ici on cache la div verte lorsque l'on ne survole plus => mouseout
let maDivVerte = document.querySelector('#vert');
maDivVerte.addEventListener('mouseout', function() {
    this.style.display = 'none';
})



// La div rouge
document.querySelector('#rouge').addEventListener('click', fdivrouge);
document.querySelector('#rouge').style.cursor = 'pointer';

function fdivrouge() {
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




// Le formulaire

document.querySelector('#submit').addEventListener('click', btnSubmit);

function btnSubmit(event) {
    event.preventDefault(); /* preventDefault() neutralise le formulaire pour quand on développe le site */
    this.classList.add('alert', 'alert-succcess');
    this.innerHTML = `Vous êtes connecté.e !`;
}