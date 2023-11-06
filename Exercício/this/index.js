const pessoa = {
    nome: 'Wesley', 
    idade: 25,
    falar: () => {
        console.log(`Olá, tudo bem! ${pessoa.nome}`)
    },
    dizernome: function () {
        console.log(`O meu nome é ${this.nome}`)
    }, 

    aniversario: function () {
        this.idade += 1

    }
}

pessoa.dizernome() 

pessoa.nome = 'Lucas'


const dizer = pessoa.dizernome.bind(pessoa)


dizer()