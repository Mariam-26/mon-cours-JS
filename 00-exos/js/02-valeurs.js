let a = 2;
document.querySelector('#td1').innerHTML = 'a = ' + a;

a = a - 1;
document.querySelector('#td2').innerHTML = 'a - 1 =' + a;

a++;
document.querySelector('#td3'). innerHTML = 'a++ =' + a;

var b = 8;
document.querySelector('#td4').innerHTML = "b =" +b;

b += 2;
document.querySelector('#td5').innerHTML = 'b +=' + b;

// Apartir d'ici on sait que a = 2 et b = 10

var c = a + b * b;
document.querySelector('#td6').innerHTML = " c = a + b * b = " + c;

var d = a * b + b;
document.querySelector('#td7').innerHTML = ' d = a * b + b' + d;


var e = a * (b + b);
  document.querySelector('#td8').innerHTML = 'e = a * (b + b) =' + e;

  var f = a * b / a;
  document.querySelector('#td9').innerHTML = ' f = a * b / a =' + f;

  var g = b / a * a;
  document.querySelector('#td10').innerHTML = 'g = b / a * a =' + g;


