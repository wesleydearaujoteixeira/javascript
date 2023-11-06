/*
const pessoas = {
    Nome: 'Wesley', 
    Idade: 25,
    Endereco: { rua: 'Minas Gerais', numero: 101},
    falar: function () {
        alert(`${this.Nome}, seja bem vindo!`)
    }
}                            


pessoas.falar()


const calculator = {
    x: 8,
    y: 9,
    somar: function () {
        return this.x + this.y
    }
}

calculator.x = 100

alert(calculator.somar())

const numeros = [2, 3, 4, 6, 7, 9]

numeros.push(5)


numeros.forEach((numeros, indice, completed) =>{
    console.log(`${numeros * 2}`)
})

const novosmodels = numeros.filter((item)=>{
    if(item % 2 == 0){
        return item * 2
    }else{
        return false
    }
})

console.log(novosmodels)

*/

const totaldeNotas = [
    {displina: 'Matematica',
    nota: parseFloat(prompt('Digite a nota')),
    peso: 4
    },

    {displina: 'Português',
    nota: parseFloat(prompt('Digite a nota')),
    peso: 2
    },

    {
        disciplina: 'Historia',
        nota: parseFloat(prompt('Digite a nota')),
        peso: 1
    },

    {
        disciplina: 'Fisica',
        nota: parseFloat(prompt('Digite a nota')),
        peso: 4
    
    },

    {
        displina: 'Quimica',
        nota: parseFloat(prompt('Digite a nota')),
        peso: 3,
    },

    {
        disciplina: 'Filosofia',
        nota: parseFloat(prompt('Digite a nota')),
        peso: 2
    },

    {
        disciplina: 'Geografia',
        nota: parseFloat(prompt('Digite a nota')),
        peso: 2
    },

    {
        disciplina: 'Sociologia',
        nota: parseFloat(prompt('Digite a nota')),
        peso: 2
    },

    {
        disciplina: 'Informática',
        nota: parseFloat(prompt('Digite a nota')),
        peso: 2
    }
]


const somatorio = totaldeNotas.map((item) => {
     return item.nota * item.peso
})

console.log(somatorio)

const somanotas = somatorio.reduce((a, b)=> {
    return a + b
}, 0)


const totaldepesos= totaldeNotas.map(function (item) {
    return item.peso
})

const somapesos = totaldepesos.reduce((a, b) => {
    return a + b
}, 0)



alert(totaldepesos)
alert(somapesos)
alert(somanotas)
const mediaPonderada = somanotas / somapesos 

alert(`A média ponderada do aluno é ${mediaPonderada.toFixed(2)}`)