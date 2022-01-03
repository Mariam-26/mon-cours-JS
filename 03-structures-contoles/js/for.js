
for (let i = 0; i < 10; i++) {// 1-initialisation de la variable/ 2-condition de sortie / 3-généralement incrémentation.

    document.getElementById('p1').innerHTML += 'i contient la valeur ' + i + ' qui est incrémentée à chaque passage <br>';
}

for (let i = 0; i <= 5; i++) {

    document.getElementById('tr1').innerHTML += '<tr> <td>Passage n° ' + (i + 1) + ' de la boucle </td> <td>i contient la valeur ' + i + ' qui est incrémentée à chanque passage.  </td></tr>'
}

// FOR AVEC UN IF


for (let arreteToi = 0; arreteToi < 10; arreteToi++) {

    if (arreteToi == 5) {
        break;
    }
    document.getElementById('div1').innerHTML += '<p class="text-white bg-success">arreToi contient la valeur ' + arreteToi + '  qui est incrémentée à chaque passage  de la boucle</p>'
}

// FOR AVEC UN OF (continue)

for (let i = 0; i < 15; i++) {
    if (i % 2 != 0) { // si le reste de la division est différent de 0 alors ça signifie que le nombre est impair
        continue;// va au suivant

    }
    document.getElementById('div2').innerHTML += '<p class="text-white bg-success"> La variable qui contient la valeur ' + i + ' est incrémentée à chaque passage de la boucle .</p>'

}

