// Boucle while sans prompt

let w1 = 0;
while (w1 < 10) {
    w1++;
    document.getElementById('p1').innerHTML += 'while:C\est le tour de manège n°' + w1 + '.<br>'
}

// boucle while avec priompt

let w2 = 0

let tourw = prompt('combien de tours de manège voulez -vous?');

while (w2 < tourw) {
    w2++;
    document.getElementById('p2').innerHTML += 'while avec prompt : c\'est le tour de manège n° ' + w2 + '.<br>';

}

// Boucle for sans prompt

for (let for1 = 1; for1 <= 10; for1++) {
    document.getElementById('p3').innerHTML += 'for: c\'est le tour de manège n° ' + for1 + '.<br>';
}