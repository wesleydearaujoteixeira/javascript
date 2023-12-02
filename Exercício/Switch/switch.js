/* 
const element = document.getElementsByTagName('h1')[0];

document.addEventListener('click', () => {
    const data = new Date('2023-11-13 00:00:00')
    const diasemana = data.getDay()
    let diaemtexto;
    const dia = data.getDate();
    const year = data.getFullYear();
    const month = data.getMonth();
    const datahora = new Date();

    const horas = datahora.getHours();

    const minutos = datahora.getMinutes();

    const seconds = datahora.getSeconds();

    switch(diasemana){
        case 0:
            diaemtexto = 'Domingo';
            element.textContent = `${diaemtexto}, ${dia}/${month+1}/${year} ${horas}:${minutos}:${seconds}`
            break
        case 1:
            diaemtexto = 'Segunda-feira';
            element.textContent = `${diaemtexto}, ${dia}/${month+1}/${year}  ${horas}:${minutos}:${seconds}` ;
            break
        case 2:
            diaemtexto = 'Terça-feira';
            element.textContent = `${diaemtexto}, ${dia}/${month+1}/${year}  ${horas}:${minutos}:${seconds}`;
            break
        case 3:
            diaemtexto = 'Quarta-feira';
            element.textContent = `${diaemtexto}, ${dia}/${month+1}/${year} ${horas}:${minutos}:${seconds}`;
            break
        case 4:
            diaemtexto = 'Quinta-feira';
            element.textContent = `${diaemtexto}, ${dia}/${month+1}/${year} ${horas}:${minutos}:${seconds}`;
            break
         case 5:
            diaemtexto = 'Sexta-feira';
            element.textContent = `${diaemtexto}, ${dia} ${month+1}/${year} ${horas}:${minutos}:${seconds}`;
            break
        case 6:
            diaemtexto = 'Sábado';
            element.textContent = `${diaemtexto}, ${dia}/${month+1}/${year}  ${horas}:${minutos}:${seconds}`;
            break
        default:
            diaemtexto = ''
            element.textContent = `dia da semana inexistente! `;

    }


});



document.addEventListener('click', function() {
    const data = new Date()
    const options = {
        datestyle: 'full',
        timestyle: 'short'

    };
    const h1 = document.getElementsByTagName('h1')[0]

    h1.innerHTML = `${data.toLocaleDateString('pt-BR', options)}`

})

*/ 


const h1 = document.getElementsByTagName('h1')[0]

const data = new Date();

function CriandoDiadaSemana(diaSemana) {
    let diaemtexto;
    switch(diaSemana) {
        case 0:
            diaemtexto = 'Domingo';
            return diaemtexto
        case 1:
             diaemtexto = 'Segunda';
             return diaemtexto
        case 2:
            diaemtexto = 'Terça';
             return diaemtexto
        case 3:
            diaemtexto = 'Quarta';
             return diaemtexto
        case 4:
            diaemtexto = 'Quinta';
            return diaemtexto
        case 5:
            diaemtexto = 'Sexta';
            return diaemtexto
        case 6:
            diaemtexto = 'Sábado';
            return diaemtexto
        default:
            diaemtexto = ''       

    }

}

function criandoMes(Mescreate) {
    let diaemmes;
    switch(Mescreate) {
        case 0:
            diaemmes = 'Janeiro';
            return diaemmes
        case 1:
            diaemmes = 'Fevereiro';
             return diaemmes
        case 2:
            diaemmes = 'Março';
             return diaemmes
        case 3:
            diaemmes = 'Abril';
             return diaemmes
        case 4:
            diaemmes = 'Maio';
            break
        case 5:
            diaemmes = 'Junho';
            return diaemmes
        case 6:
            diaemmes = 'Julho';
            break
        case 7:
            diaemmes = 'Agosto';
            return diaemmes
        case 8:
            diaemmes = 'Setembro';
            return diaemmes
        case 9:
            diaemmes = 'Outubro';
            return diaemmes
        case 10:
            diaemmes = 'Novembro';
            return diaemmes
        case 11:
            diaemmes = 'Dezembro';
            return diaemmes
        default:
            diaemmes = ''
                
    }
}

function createData(data) {
    const diaSemana = data.getDay();
    const Mescreate = data.getMonth();
    
    const NumeroDia = CriandoDiadaSemana(diaSemana);
    const DiaMes = criandoMes(Mescreate);

    return ` ${NumeroDia}, ${data.getDate()} de ${DiaMes} de ${data.getFullYear()} | ${data.getHours()}:${data.getMinutes()}`


}

h1.innerHTML = createData(data)


