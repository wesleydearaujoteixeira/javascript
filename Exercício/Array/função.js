/* function calcular(k){
    if(k > 20){
        return ' K maior do que 20'
    }else {
        return ' K menor do que 20'
    }

}
let resposta = calcular(18)

console.log(`${resposta}`)

function somar(a=0, b=0 ) {
    return a + b 

}

console.log(somar()) */

function fatorial(x){

    fat = 1
    for(let i = x; i > 1; i-- ){
        fat *= i
        console.log(`${i}`)
    }
    return `${fat}`



}
console.log(fatorial(5))