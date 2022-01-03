

let x = 5;
let y = -5;

// <= inférieur ou égal - >= supérieur ou égal 

if (x >= 0 && x <= 10){
document.getElementById('p1').innerHTML = 'x qui vaut ' + x +' est une valeur comprise comprise entre 0 et 10';
} else{
    document.getElementById('p1').innerHTML = 'x n\'est pas une valeur comprise entre 0 et 10';
}
// ||  

if(y < -10 || y > 10){
    document.getElementById('p2').innerHTML = 'y qui vaut ' + y + 'est  une valeur plus petite que -10 ou plus grand que 10.';

}else {
    document.getElementById('p2').innerHTML = 'y qui vaut ' + y + 'n\'est pas une valeur plus petite que -10 ou plus grande que 10.'; 
    
}

// NON !

if (!(x < -2)) {
    document.getElementById('p3').innerHTML = 'x qui vaut' + x+ 'est une valeur strictement supérieure à 2.';
}