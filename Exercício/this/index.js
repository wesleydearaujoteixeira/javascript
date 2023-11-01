/*const pessoa = {
    nome: 'Wesley', 
    idade: 25,
    falar: () => {
        console.log(`Olá, tudo bem!`)
    },
    dizernome: function () {
        console.log(`O meu nome é ${this.nome}`)
    }, 

    aniversario: function () {
        this.idade += 1

    }
}
pessoa.falar()
pessoa.dizernome()
console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)*/

const objeto = {
    valor: 500,
    cont: function () {
        console.log(`O valor é ${this.valor}`)
    }
}

objeto.cont()