/* function sum(limite) {
    let soma = 0

    for(let i = 0; i <= limite; i++){
        if(i % 3 === 0 || i % 5 === 0)
            soma += i
    }
    return soma
}   

console.log(sum(10)) 


const notas = [10, 10, 10]

// 0 - 59: E
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

function calculatemedia(valores) {
    let sum = 0
    let total = valores.length
    let media = 0 
    
    for(let soma in valores){
        sum += valores[soma]
        media = sum / total 
    }if(media >= 0 && media <= 59){
        return `A média do aluno é ${media} tem a nota E`
    }else if(media >= 60 && media <= 69){
        return ` A média do aluno é ${media} tem a nota D`
    }else if(media >= 70 && media <= 79){
        return ` A média do aluno é ${media} tem a nota C`
    }else if(media >= 80 && media <= 89){
        return ` A média do aluno é ${media} tem a nota B `
    }else if (media >= 90 && media <= 100){
        return ` A média do aluno é ${media} tem a nota A`
    }
}

let result = calculatemedia(notas)
console.log(result) */

const valores = [8, 4, 5, 6, 7, 9, 8, 1, 10]

function calculateHigher(num) {
    maior = num[0]
    menor = num[0]
    for(let pos in num){
        if(maior < num[pos]){
            maior = num[pos]
        }
        if(menor > valores[pos]){
            menor = num[pos]
        }
    } console.log(`O número ${maior} é maior e o número ${menor} é menor`)

}

let resultado = calculateHigher(valores)



