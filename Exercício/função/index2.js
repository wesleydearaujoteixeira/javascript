function sum(limite) {
    let soma = 0

    for(let i = 0; i <= limite; i++){
        if(i % 3 === 0 || i % 5 === 0)
            soma += i
    }
    return soma
}   

console.log(sum(10))