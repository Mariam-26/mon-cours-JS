let age;
age = prompt(`Quel est votre âge ?`);
/*
 * J'affiche la valeur ds la cosole
 * (SEULEMENT EN PERIODE DE DEVELOPPENT DU SITE)  
 */console.log(age); 

 // un autre exemple

// déclaration et affectation d'une variable

let prenom = "Mariam";
let ville = " Paris";

// console.log() ou console.info sont des instructions qui permettent d'afficher le contenu d'une variable sur le navigateur dans la console

console.log(prenom);
console.info(ville);

// j'affiche le contenue de ma variable dans une boite d'alerte

alert(prenom); /* Ici j'affiche le contenue de ma variable prenom */

alert("prenom"); /* Ici j'affiche la chaine de caractère "Prenom" */
<div class="container">
        <p> <b>Il existe 7 typees de données JavaScript</b></p>
        <h2> <em>String</em> iu chaîne de caractère </h2>
        <p>En JS, onn va utilisé indifféremment des guillements double ou des apostrophes pour entourer une chaine de
            caractère. Ces méthodes seront strictement équivalentes, à la différence du PHP par exemple.</p>
        <div class="alert alert-warning">
            <p>Faîte attention cependant à un point, si votre chaîne de caractère contient un carractère qui est le même
                que le lélimiteur choisi, il faudra échapper ce caractère grâce à un antislash (\) (Shift + option +
                slash)</p>
        </div>
        <p id="p1" class="text-white bg-success"></p>
        <p id="p2" class="text-white bg-success"></p>


    </div>
// le JS pour la page 02-03 type.html

// string

let presentation = "Je m'appelle Michaël";
let age = 21;

console.log(typeof presentation, typeof age);
// La fonction "typeof" va nous indiquer le type de donnés contenu dans titre variable

document.querySelector("#p1").innerHTML =
  "Type de donnée pour la variable presentation : " + typeof presentation;

document.querySelector("#p2").innerHTML = presentation;
