const pessoas = [
    { nome: "Alice", idade: 28, cidade: "São Paulo" },
    { nome: "Bob", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Carla", idade: 42, cidade: "Salvador" },
    { nome: "David", idade: 25, cidade: "Porto Alegre" },
    { nome: "Eva", idade: 32, cidade: "Belo Horizonte" },
  ];


/* Usando map, crie um novo array que contenha apenas os nomes das pessoas.

Usando filter, crie um novo array contendo apenas as pessoas que têm 30 anos ou mais.

Usando reduce, calcule a soma das idades de todas as pessoas na lista. */

const nomepessoa =  pessoas.map((k) => k.nome )

console.log(nomepessoa)

const oldpeople = pessoas.filter((item) => {
    if(item.idade > 30){
        return true
    }else{
        return false
    }
})

console.log(oldpeople)

const somatorio = pessoas.reduce((a, b) => {
    return a + b.idade
}, 0)

console.log(somatorio)