const dados = document.querySelectorAll('.dados');

const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')

const button = document.querySelector('#enviar');

let pessoas = []
const res = document.querySelector('#resposta');
res.innerHTML = ''
res.style.padding = '20px'
button.addEventListener('click', () => {
    dados.forEach(element => {
       
        res.innerHTML += ` ${element.value} `
        pessoas.push(element.value)
        
        
    })
    console.log(pessoas)
    pessoas = []
    
    

    
});

button.addEventListener('mouseenter', () => {
    res.innerHTML = ''
})