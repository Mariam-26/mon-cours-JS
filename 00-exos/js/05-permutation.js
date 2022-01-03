let nombre1 = 5;
let nombre2 = 3

document.querySelector('#p1').innerHTML = 'Au départ, ma variable nombre1 contient la valeur ' + nombre1;

document.querySelector('#p2').innerHTML = 'Au départ, ma variable nombre2 contient la valeur ' + nombre1;



let tmp;/* j'utilise une variable temporaire */

tmp = nombre1;
// tmp = 5

nombre1 = nombre2; /* nombre2 est mtnant égal à 3 (nombre2) */

 nombre2 = tmp;

 console.log('nmbre1 est égale à ', nombre1);
 console.log('nmbre2 est égale à ', nombre2);

 document.querySelector('#p3').innerHTML = 'A la fin, ma variable nombre1 contient la valeur ' + nombre1;

document.querySelector('#p4').innerHTML = 'A la fin, ma variable nombre2 contient la valeur ' + nombre2;

