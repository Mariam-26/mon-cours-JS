

let nom = prompt ('Quel est votre nom?' );

let prenom = prompt ('Quel est votre prénom?');
console.log(nom,prenom);


alert(prenom + '' +nom);
//* ici on affiche d'abord le contenu de notre variable prenom puis grâce au signe + on ajoute ici une chaîne de caractères (ici c'est juste un espace), on concatène à nouveau pour ajouter le contenu de notre variable nom.


document.querySelector('#p1').innerHTML = 'Bonjour, vous vous appellez '+ nom +' ,' + nom +' ' + prenom ;




let age = prompt ('Quel est votre âge?');

let ville = prompt ('Dans quel ville vivez vous?');

document.querySelector('#p2'). innerHTML = " vous avez" + age +' ans et vous habitez à '+ ville + '.' ;