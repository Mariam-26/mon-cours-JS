for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.getElementById('p1').innerHTML += i + 'est pair. <br>'
    } else {
        document.getElementById('p1').innerHTML += i + 'est impair. <br>'
    }
}

let nbUser = parseInt(prompt('Entrez un nombre !'));
let nbMax = (nbUser + 10);
for (let i = nbUser; i <= nbMax; i++) {
    if (i % 2 === 0) {
        document.getElementById('p2').innerHTML += i + 'est pair. <br>'
    } else {
        document.getElementById('p2').innerHTML += i + 'est impair. <br>'
    }
}

let nbUser2 = parseInt(prompt('Entrez un nombre !'));
let nbMax2 = (nbUser2 + 10);
while (nbUser2 <= nbMax2) {
    if (nbUser2 % 2 === 0) {
        document.getElementById('p3').innerHTML += i + 'est pair. <br>'
    } else {
        document.getElementById('p3').innerHTML += i + 'est impair. <br>'
    }
    nbUser2++;

}