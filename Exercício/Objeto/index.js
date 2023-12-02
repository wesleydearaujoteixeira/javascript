const criarPessoa = (time, estadio, posição) => {
    return {
        time: time,
        estadio: estadio,
        posição: posição,
        mensagem: function () {  return ` ${this.time} jogará contra o Botafogo no Estadio ${this.estadio}`},
        imcrementaposition: function() {
            return this.posição += 1
        }
    }
}

let  result = criarPessoa('Flamengo', 'Maracanã', 4)
console.log(`A posição do time ${result.time} na tabela é ${result.posição}`)
console.log(`O ${result.time} subiu para a ${result.imcrementaposition()}`)
console.log(result.mensagem())

