let x = 4;
let y = 0;

if (x>1){// normalement ce bloc soit s'afficher car c'est vrai

    alert ('x contient une valeur supérieur à 1');
}

if(x==y) {// le premier égal correspond à une valeur  un string et le deuxième à un type

    alert(' x et y contiennent la même valeur');
}// comme c'est faux , cette alert ne doit pas se déclancher 

if(y){// l'alerte ne se déclenche pas car y contient 0, qui est une valeur qui renvoie false(liste sur page HTML)

    alert('la valeur de y est évaluée à true');
}

// inversion de test logique

 if ((x<1) == false ){
//on met les deux parenthèses pour bien prendre en compte toute l'opération
    alert('x ne contient pas une valeur inférieur à 1');
 }
