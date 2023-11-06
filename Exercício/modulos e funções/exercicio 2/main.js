// importamos ela de outro arquivo.
import {dobro, soma, subtrair} from './funções.js'

function mostrarMenu() {
    const option = prompt('Escolha uma operação: \n1. Dobro de um número\n2. Somar dois números\n3. Subtrair dois numeros \n4. Sair')
return parseInt(option)
}


function calcularoDobro() {
    let numero = parseFloat(prompt('Digite um numero'))
    if(!isNaN(numero)){
        // execução da função dobro de um número
        alert(` O dobro de ${numero} é ${dobro(numero)}`)

    }else {
        alert('Insira um número válido!')
    }
}

function calcularsoma() {
    let n1 = parseFloat(prompt('Digite um número:'))
    let n2 = parseFloat(prompt('Digite o segundo número'))
    if(!isNaN(n1) && !isNaN(n2)){
        let resultado = soma(n1, n2)
        alert(`A soma de ${n1} + ${n2} = ${resultado}`)
    }else {
        alert('Número inválido digite um número válido.')
    }
}

function calcularsubtração() {
    let n1 = parseFloat(prompt('Digite um número'))
    let n2 = parseFloat(prompt('Digite o segundo número'))
    if(!isNaN(n1) && !isNaN(n2)){
      let resultado = subtrair(n1, n2)
      alert(`A sbtração de ${n1} - ${n2} = ${resultado}`)  
    }
}

let escolha = mostrarMenu()

do{
    switch(escolha){
        case 1:
            calcularoDobro()
            break
        case 2:
            calcularsoma()
            break
        case 3:
            calcularsubtração()
            break
        case 4:
            alert('Saindo')
            break
        default:
            alert('Opção inválida tente novamente')
    }

}while(escolha !== 4) // tudo isso enquanto a escolha for diferente de 4 