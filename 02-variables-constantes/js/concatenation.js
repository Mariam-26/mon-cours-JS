let age = Number(prompt('Quel est votre âge ?'));

let phrase = `Bonjour j'ai ` + age + `ans.`;

console.log(phrase);

document.querySelector('#p1').innerHTML = phrase;