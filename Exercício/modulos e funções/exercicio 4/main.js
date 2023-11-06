// importamos ela de outro arquivo.
import {dobro} from './funções.js'

// solicitamos ao usuário um número.
let numero = parseFloat(prompt('Digite um número.'))

if(!isNaN(numero)){
    // Se for um numéro válido, executamos a função dobro.
    let resultado = dobro(numero)
    console.log(` O dobro de ${numero} é ${resultado}`)
} else {
    console.log('Insira um número válido por gentileza!')
}