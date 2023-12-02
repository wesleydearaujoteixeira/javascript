
const ZeroaEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;

}


function datadodia (d) {
    const dia = ZeroaEsquerda(d.getDate())
    const mes = ZeroaEsquerda(d.getMonth() + 1)
    const ano = ZeroaEsquerda(d.getFullYear())
    const horas = ZeroaEsquerda(d.getHours())
    const minutos = ZeroaEsquerda(d.getMinutes())
    const segundos = ZeroaEsquerda(d.getSeconds())

   return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}` 

}

const data = new Date()
const resultado = datadodia(data)
console.log(resultado)