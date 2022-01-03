let x = 500;    

document.querySelector('#valeurX').innerHTML = 'la valeur de x est' + x;

if (x > 1) {

    document.querySelector('#resultatX').innerHTML = 'x contient une valeur supérieur à 1';
    
} else {

    document.querySelector('#resultatX').innerHTML = ' x contien uen valeur inférieur à 1';
}

let y = 0.5;

document.querySelector('#valeurY').innerHTML = 'la valeur de y est' + y;

if (y > 20){
    document.querySelector('#resultatY').innerHTML = 'y contient une valeur supérieur à 20';

}else{// else veut dire si la première est faux affiche moi ça

document.querySelector('#resultatY').innerHTML = 'y contient une valeur inférieur à 20'
}

