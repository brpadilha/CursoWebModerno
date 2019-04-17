function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: (preco * 0.1).toFixed(2)
    }
}

console.log(criarProduto('Notebook', 2999.99))
console.log(criarProduto('TV', 1799.99))


