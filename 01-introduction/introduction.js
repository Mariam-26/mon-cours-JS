// un commentaire monoligne

/* un commentaire
mutiligne
*/

// BOUTON1
let bouton1 = document.getElementById(`b1`);
bouton1.addEventListener(`click`, alerter);


function alerter() {
  alert(`Je suis une fenêtre d'alerte`);
}


// BOUTON2

let bouton2 = document.getElementById(`b2`);
      bouton2.addEventListener(`click`, ajouter);

      function ajouter() {
        let nouveauParagraphe = document.createElement(`p`);
        nouveauParagraphe.textContent = `je suis un paragraphe !`;
        document.querySelector(`.nouveauContenu`).appendChild(nouveauParagraphe);
      }