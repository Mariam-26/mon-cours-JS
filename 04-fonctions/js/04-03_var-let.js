function porteeNew() {
    let xlet = 1;
    var yvar = 2;
    if (true) {
        let xlet = 500;
        var yvar = 100;

        document.getElementById('p1').innerHTML = "La variable let appelé xlet qui se trouve dans le if =" + xlet;
        document.getElementById('p2').innerHTML = "La variable var appelé yvar qui se trouve dans le if =" + yvar;
        console.log(xlet);
    }

    document.getElementById('p3').innerHTML = "Lavariable let xlet hors du if vaut " + xlet;
    document.getElementById('p4').innerHTML = "La variable var yvar hors du if var " + yvar;
    console.log(yvar);
}
/* yvar affiche la dernière valeur déclarées car var a une portée élargie*/
/* fin de la fonction*/

porteeNew();