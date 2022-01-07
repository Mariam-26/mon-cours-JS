for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        document.getElementById('p1').innerHTML += i + 'est pair. <br>'
    } else {
        document.getElementById('p1').innerHTML += i + 'est impair. <br>'
    }
}

for (let i = 12; i <= 21; i++) {
    if (i % 2 === 0) {
        document.getElementById('p2').innerHTML += i + 'est pair. <br>'
    } else {
        document.getElementById('p2').innerHTML += i + 'est impair. <br>'
    }
}

let i = 12;
while (i < 21) {
    i++;

    document.getElementById('p3').innerHTML += i + 'est pair. <br>'

    document.getElementById('p3').innerHTML += i + 'est impair. <br>'

}