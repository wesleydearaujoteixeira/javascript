function atualizadorcontador() {
    var cont = 0 
    var contador

    function contador() {
        cont++
        console.log('contador' + cont)
    }

    if (cont >= 5){
        clearInterval(intervalid)
        console.log('Intervalo Interrompido')
    }

    let intervalid = setInterval(contador, 2000)
}
atualizadorcontador()