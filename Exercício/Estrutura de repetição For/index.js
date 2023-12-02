const elementos = [
    {tag: 'p', texto: 'Palmeiras não tem mundial' },
    {tag: 'div', texto: 'Frase2'},
    {tag: 'section', texto: 'frase3'},
    {tag: 'footer', texto: 'frase4'}

];

const objeto = document.querySelector('#main')

const div = document.createElement('div')

for(let i = 0; i < elementos.length; i++ ){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada)
}


objeto.appendChild(div)

