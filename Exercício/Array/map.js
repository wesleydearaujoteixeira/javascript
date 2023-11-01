const valores = [
    {
        produto:"Celular", 
        valor: 5
    },
    {
        produto: "Televisão", 
        valor: 200
    },

    {
        produto: "Carro", 
        valor: 500
    },

    {
        produto: "AirFry", 
        valor: 1200
    },

    {
        produto: "Maquina de lavar", 
        valor: 2200
    },

    {
        produto: "Carregador", 
        valor: 100
    }

]

const valoresemReais = valores.map((item) => {
    return item.valor * 5.04 
    
})

console.log(valoresemReais)
const mudarvariaveis = valores.map((a) => {
    return a.produto.replace('Celular', 'Smartphone')
})

console.log(mudarvariaveis)

const maiorvalor = valoresemReais.filter((item) =>{
    if( item > 6000){
        return true

    }else{
        return false
    }
})

console.log(maiorvalor)

const somavalores = valores.reduce((a, b) => {
    return a + b.valor
}, 0)

console.log(somavalores)


valores.forEach((real) => {
    real.valor *=  2
    console.log(real.valor)
})

