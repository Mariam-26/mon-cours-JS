// Diapo 1 =>js directement sur l'élément

// Diapo 2

document.querySelector('#btnDiapo2').addEventListener('click', function() {
    document.getElementById('diapo2').src = 'img/3.jpg';
    document.getElementById('diapo2').alt = 'Photo de la nature';
})


// Diapo 3
// avec une fonction nommée
document.querySelector('#btnDiapo3').addEventListener('click', diapo3);

function diapo3() {
    document.getElementById('diapo3').src = 'img/2.jpg';
    document.getElementById('diapo3').alt = 'Photo de la plage';
}