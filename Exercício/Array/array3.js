
let idade = 0 
let y = idade
let nome = '';
do {
     nome = prompt(' Qual o seu nome?')
     idade = Number(prompt(' Qual a sua idade? '))
     y++
   
} while(nome != 'não' && idade != 0);
alert(`${y}`) 