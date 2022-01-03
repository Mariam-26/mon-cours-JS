let temp1 = prompt('Saisissez une temperature dont vous voulez l\'équivalent en farenheit');

let conversion1 = (temp1 * 9 / 5) + 32;

document.querySelector('#li1').innerHTML = '1 degré celsius représente ' + ((1*5/9)+32) + 'degrés farenheit';

document.querySelector('#li2').innerHTML = 'Vous avez choisi ' + temp1 + '°C, ça représente ' + conversion1 + '°F.';


let temp2 = prompt('Saisissez une temperature dont vous voulez l\'équivalent en celsius');

let conversion2 = (temp2 - 32) * 5 / 9;

document.querySelector('#li3').innerHTML = '1 degré farenheit représene ' + ((1 -32)*5/9) + 'degrés celsius';

document.querySelector('#li4').innerHTML = 'Vous avez choisi ' + temp2 + '°F, ça représente ' + conversion2 + '°C.';