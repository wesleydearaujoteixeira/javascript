const estoque = []


// função para cadastrar o nome e o produto em um array estoque
function cadastrarItem() {
    const nome = prompt('Nome do produto: ')
    const quantidade = parseFloat(prompt('Digite o total de quantidade: '))
    // Se quantidade n for um número e for menor que zero a quantidade vai ser inválida
    if(isNaN(quantidade) &&  quantidade <= 0){
        return alert('Quantidade inválida! Digite uma quantidade viável.')
    }else{

        // mesmo que {nome: nome, quantidade: quantidade}
        const item = {nome, quantidade}
        estoque.push(item)
        alert(`${nome} foi adicionado com sucesso ao estoque ${quantidade}`)

    }
}
// Se o total de itens no array Estoque for igual a zero significa que o estoque esta vazio
function ListarItens(){
    if (estoque.length === 0){
        alert(` O estoque está vazio. `)
        return 
    }

    // Transforme a lista em objetos e depois junta tudo.
    const itemString = estoque.map(function (item, index){
        return `${index + 1}. ${item.nome}  ${item.quantidade} unidades`
    }).join("\n")


    alert(`Itens no Estoque ${itemString}`)
}

function alterarQuantidade() {
    ListarItens()
    const indice = parseFloat(prompt('Digite o numero do item que deseja alterar: ')) - 1


    // Se o indice NaN n for um número e for menor que zero 
    // Ou se o indice for maior que o próprio array estoque o resultado será inválido.
    if(isNaN(indice) && indice <= 0 || indice > estoque.length){
        alert(' Resultado inválido, digite um indice válido por favor')
        return 

    }
       
    // a partir de agora o produto vai passar a ter uma nova quantidade definido pelo indice anterior
    const novaQuantidade = parseFloat(prompt(`Digite a nova quantidade para ${estoque[indice].nome}` ))

    if(isNaN(novaQuantidade) || novaQuantidade <= 0){
        alert('Resultado inválido. Alteração n foi sucedida!')
        return 
    }
    
    estoque[indice].quantidade = novaQuantidade
    alert(`O produto ${estoque[indice].nome} possui a quantidade ${estoque[indice].quantidade}`)
}

function ExcluirItem () {
    ListarItens()
    const indice = parseFloat(prompt('Digite o indice que você deseja excluir:'))

    if(isNaN(indice) || indice <= 0 || indice > estoque.length){
        alert(' Operação inválida')

    }

    const ItemExcluido = estoque[indice].nome
    estoque.splice(indice, 1)
    alert(`O item ${ItemExcluido} foi excluido com sucesso!`)
}

let escolha 

while (escolha !== '5'){
    escolha = prompt('Escolha uma opção. \n 1 cadastrar item \n2 Listar itens \n 3 Alterar itens. \n 4 Escluir itens. \n 5 Sair do programa. ')

    switch(escolha){

        case '1':
            cadastrarItem()
            break
        case '2':
            ListarItens()
            break
        case '3':
            alterarQuantidade() 
            break
        case '4':
            ExcluirItem()
        case '5':
            alert('Saindo do Programa')
            break

    }
}