let numero = document.body.querySelector('#n')
let setlista = document.body.querySelector('#lista')
let resposta = document.body.querySelector('#res')
let valores = []


function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true

    }else{
        return false
    }
}

function isLista(n, lista){
    if(lista.indexOf(Number(n)) != -1) {
        return true

    }else{
        return false
    }
}

function adicionar() {
    if(isNumber(numero.value) && !isLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let element = document.createElement('option')
        element.innerText = `Número ${numero.value} adicionado!`
        setlista.appendChild(element)
    
    }else{
        alert('Não tá funcionando')
    
    }
    numero.value = ''

}

function finalizar() {
    if(valores.length == 0){
        alert('Erro! adicione um numero para continuar! ')
    }else{
        total = valores.length
        soma = 0
        maior = valores[0]
        menor = valores[0]
        media = 0 
        for(let position in valores){
            if(valores[position] > maior){
                maior = valores[position]
            }  
            if(menor > valores[position]){
                menor = valores[position]
            }
            soma += valores[position]
           

        }
    media = soma / total
    resposta.innerHTML = ''
    resposta.innerHTML += `<p> O maior número é ${maior}</p>`
    resposta.innerHTML += `<p> O menor número é ${menor}</p>`
    resposta.innerHTML += `<p> A quantidade total é ${total} elementos </p>`
    resposta.innerHTML += `<p> A soma de todos os elementos é ${soma} </p> `
    resposta.innerHTML += `<p> A média total da quantidade de números é ${media} </p>`
    
    }

     
}