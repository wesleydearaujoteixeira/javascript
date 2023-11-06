
const veiculo = {
    modelos: prompt('Qual o modelo do seu carro?'),
    passageiros: [],
    limitedePassageiros: 5,
    velocidade: 0,
    aumentar: function(aceleracao){
        this.velocidade += aceleracao
        alert(`Velocidade aumentada para ${this.velocidade}`)
    },
    desacelerar: function(diminuição){
        const result = this.velocidade - diminuição
        if( result >= 0){
            this.velocidade -= diminuição
        }else{
            this.velocidade = 0
            alert('O veículo está parado ')
        }
    },
    aumentarPassageiro: function(nomePassageiro){
        if(this.velocidade === 0 && this.passageiros.length < this.limitedePassageiros){
            this.passageiros.push(nomePassageiro)
            alert(`${nomePassageiro} adicionado com sucesso!`)
        }else if (this.velocidade > 0){
            alert('Não é possivel adicionar passageiros com o Veículo em movimento.')
        }else{
            alert('Limite de passageiros atingido!')
        }   
        }



        
    }


function mostrarMenu() {
    return prompt(` Veículo: ${veiculo.modelos} \nLimite de passageiros: ${veiculo.limitedePassageiros}
    \nVelocidade atual: ${veiculo.velocidade}km/h \nPassageiros: ${veiculo.passageiros.join(", ")}
    \n\nEscolha uma opção: \n1. Aumentar Velocidade. \n2. Diminuir a velocidade. \n3. Adicionar Passageiros. \n4. Sair do Programa.`)
}

while (true) {
    const escolha = mostrarMenu()

    switch(escolha){

        case "1":
            const acelerar = parseFloat(prompt('Escolha a velocidade que você quer acelerar: km/h '))
            veiculo.aumentar(acelerar)
            break
        case "2":
            const diminuir = parseFloat(prompt('Escolha a velocidade para diminuir o veiculo: km/h'))
            veiculo.desacelerar(diminuir)
            break
        case "3":
            const passageiro = prompt('Adicione um passageiro:')
            veiculo.aumentarPassageiro(passageiro)
            break
        case "4":
            alert(' Saindo... ')
            break
        default:
            alert('Numero inválido por favor adicione um número válido!')
    
    }

    if(escolha === "4"){
        break
    }
}

