'use strict';

const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=Operador]')

let novoNumero = true
let operador;
let numeroAnterior;
const existennumero = () => operador != undefined
const calcular = () => {
    if(existennumero()){
        const numeroAtual = parseFloat(display.textContent.replace(',', '.')) 
        novoNumero = true
        const resultado =  eval (`${numeroAnterior} ${operador} ${numeroAtual}`)
        atualizarDisplay(resultado)
        
        
    }

}
const  atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto
        novoNumero = false

    }else{
        display.textContent += texto
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)
numeros.forEach(numero => numero.addEventListener('click', inserirNumero))

const selectoperador = (evento) => {
    if (!novoNumero){
        calcular()
        novoNumero = true
        operador = evento.target.textContent
        numeroAnterior = parseFloat(display.textContent.replace(',', '.')) 

    }

}

operadores.forEach(operador => operador.addEventListener('click', selectoperador))



const ativarigual = () => {
    calcular()
    operador = undefined
}

document.getElementById('igual').addEventListener('click', ativarigual)


const limpardisplay = () => display.textContent = ''
document.getElementById('LimparDisplay').addEventListener('click', limpardisplay)


const limparcalculo = () => {
    limpardisplay()
    operador = undefined
    novoNumero = true
    numeroAnterior = undefined
}
document.getElementById('LimparCálculo').addEventListener('click', limparcalculo)



document.getElementById('backspace').addEventListener('click', function() {
    display.textContent = display.textContent.slice(0, -1)
})

document.getElementById('OperadorInverter').addEventListener('click', function(){
    atualizarDisplay(display.textContent * -1)
    novoNumero = true

})
const existedecimal = () => display.textContent.indexOf(',') != -1
const existevalor = () => display.textContent.length > 0
const inserirdecimal = () => {
    if (!existedecimal()){
        if(existevalor()){
            atualizarDisplay(',')
        }else{
            atualizarDisplay('0,')
        }
    }
}
document.getElementById('decimal').addEventListener('click', inserirdecimal)