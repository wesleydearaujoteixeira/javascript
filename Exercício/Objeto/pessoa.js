const pessoa = {
    nome: 'João',
    escola: 'Santa Helena ',
    estado: 'Santa Catarina',
    nota: 4.5,
    boasvindas() {
         return `O aluno ${this.nome} estuda na escola ${this.escola} no estado de ${this.estado} e tirou ${this.nota}`
    },
    notaumentada(){
       return this.nota += 1
    },
    notadiminuida() {
        return this.nota -= 1
    }

}

console.log(pessoa.boasvindas())
console.log (pessoa.notaumentada())
console.log (pessoa.notadiminuida())