const produtos = [
    { nome: " Smartphone ", preco: 799.99, categoria: "Eletrônicos", estoque: 15 },
    { nome: " Laptop ", preco: 1499.99, categoria: "Eletrônicos", estoque: 8 },
    { nome: " Livro ", preco: 12.99, categoria: "Livros", estoque: 25 },
    { nome: " Fone de Ouvido ", preco: 39.99, categoria: "Eletrônicos", estoque: 10 },
    { nome: " Mesa de Escritório ", preco: 199.99, categoria: "Móveis", estoque: 5 },
  ];


/* Usando map, crie um novo array com os nomes dos produtos.

Usando filter, crie um novo array contendo apenas os produtos que estão na categoria "Eletrônicos".

Usando reduce, calcule o preço total dos produtos em estoque.*/

const nomes = produtos.map((s) => s.nome)

const novoarray = produtos.filter((item) => {
    if(item.categoria === "Eletrônicos"){
        return true
    }else{
        return false
        }
    })


const valortotal = produtos.reduce((a, b) => {
    return b.preco * b.estoque + a
}, 0)


console.log(`O nome dos produtos são ${nomes}`)
console.log(novoarray)
console.log(` O valor total é ${valortotal}`)
