'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2)

const atualizar = (tempo) => {
    const segundos = document.querySelector('#segundos');
    const minutos = document.querySelector('#minutos');
    const horas = document.querySelector('#horas');
    const dias = document.querySelector('#dias');



    const qtdsegundos = tempo % 60
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60)
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60)) 
    const qtdDias = Math.floor(tempo / (60 * 60 * 24)) 


    segundos.innerHTML = formatarDigito(qtdsegundos);
    minutos.innerHTML = formatarDigito(qtdMinutos);
    horas.innerHTML = formatarDigito(qtdHoras);
    dias.innerHTML = formatarDigito(qtdDias);

}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(timer)
    const contar = () => {
        if (tempo === 0){
            pararContagem()
        }
        atualizar(tempo)
        tempo--;
  }

  const timer = setInterval(contar, 1000)
}

const tempo = () => {
    const dataEvento = new Date('2023-11-17 21:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempo())