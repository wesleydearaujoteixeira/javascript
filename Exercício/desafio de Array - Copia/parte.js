let numero = document.body.querySelector('#n')
let setlista = document.body.querySelector('#lista')
let valores = []
let resposta = document.body.querySelector('#res')

function isnumerico(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function lista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar() {
    if(isnumerico(numero.value) && !lista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `O número ${numero.value} foi adicionado`
        setlista.appendChild(item)
    }else{
        window.alert('ERRO DIGITE NOVAMENTE')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0){
        alert('Erro! Você precisa digitar algum valor ')
    } else {
        let total = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0 
        media = 0 
        for(let pos in valores){
            if (maior < valores[pos])
                maior = valores[pos]
            if (menor > valores[pos])
                menor = valores[pos]
            soma += valores[pos]
            media = soma / total
            }
         
        resposta.innerHTML = '' 
        resposta.innerHTML += `O maior valor é ${maior}<br> `
        resposta.innerHTML += `O menor valor é ${menor}<br>`
        resposta.innerHTML += `A média total é ${media}`
    }
    
    
}



