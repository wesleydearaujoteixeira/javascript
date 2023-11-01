const pessoa = {
    falar: () => {
        return 'Olá'
    }
}

console.log(pessoa.falar())


const soma = function (a, b) {
    return a + b
}

console.log(soma(5,5))

const imprimirresultado = function (x, y, operação = soma){
    console.log(operação(x, y))
}

imprimirresultado(3,3)
imprimirresultado(3, 4, soma)
imprimirresultado(4, 8, function (x, y) {
    return x - y
})