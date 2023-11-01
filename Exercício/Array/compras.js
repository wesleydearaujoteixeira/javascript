const compras = [
    { nome: "Maçãs", quantidade: 5, precoUnitario: 2.5 },
    { nome: "Bananas", quantidade: 3, precoUnitario: 1.0 },
    { nome: "Morangos", quantidade: 2, precoUnitario: 3.0 },
    { nome: "Uvas", quantidade: 1, precoUnitario: 4.5 },
    { nome: "Abacaxis", quantidade: 2, precoUnitario: 2.0 },
  ];

quant = compras.map((item) =>{
    return item.quantidade * item.precoUnitario
})

console.log(quant)

total = quant.reduce((a, b) => {
    return a + b
}, 0)

console.log(total)

itemmaiscaro = quant.reduce((c, i) => Math.max(c, i))

console.log(itemmaiscaro)

novosnumeros = quant.filter((valor) => {
    if(valor > 4){
        return true
    }else{
        return false
    }
})

console.log(novosnumeros)