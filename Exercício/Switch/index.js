
function diaSemanaDay(diaSemana){

    let diaDaSemanatexto;

    switch(diaSemana){
        case 0:
            diaDaSemanatexto = 'Domingo';
            return diaDaSemanatexto;
        case 1:
            diaDaSemanatexto = 'Segunda';
            return diaDaSemanatexto;
        case 2:
            diaDaSemanatexto = 'Terça';
            return diaDaSemanatexto;
        case 3:
            diaDaSemanatexto = 'Quarta';
            return diaDaSemanatexto;
        case 4:
            diaDaSemanatexto = 'Quinta';
            return diaDaSemanatexto;
        case 5:
            diaDaSemanatexto = 'Sexta';
            return diaDaSemanatexto;
        case 6:
            diaDaSemanatexto = 'Sábado';
            return diaDaSemanatexto;
        default:
            diaDaSemanatexto = 'não tem essa data!'
            return diaDaSemanatexto;

    }
}

const dia = new Date('1997-04-21 01:02:00');

let diasemana = dia.getDay()

console.log(diaSemanaDay(diasemana))




