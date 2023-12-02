
/*

function retornaHora (data) {
    if ( data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')

    }

    if (!data){
        data = new Date();

    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
    }catch(e) {
        // tratar erro;
        // console.log(e);

    } finally {
        console.log('Tenha um bom dia.')
    }

*/

function Showhour() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


const timer = setInterval( function () {
    console.log(Showhour())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 3000)

setTimeout(function(){
    console.log('Ola mundo')
}, 5000)