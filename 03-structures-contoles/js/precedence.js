let x = 15;
let y = -20;
let z = 0;

document.getElementById('v1').innerHTML = ' la variable x contient ' + x ;

document.getElementById('v2').innerHTML = ' la variable y contient ' + y ;


document.getElementById('v3').innerHTML = ' la variable z contient ' + z ;


if ( x >= 20 + y && x <= 10 || y < 0) {
    document.getElementById('p1').innerHTML = ' soit x = ' + x +' compris entre 0 et 10 , soit y strictement positif, soit les deux ';
}

