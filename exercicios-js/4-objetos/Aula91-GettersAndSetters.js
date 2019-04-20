const sequencia = {
    _valor: 1, // convenção
    get valor() { //get ler o valor de uma variável
        return this._valor++
    },
    set valor(valor){ //set altera o valor de uma variável
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900

console.log(sequencia.valor, sequencia.valor)