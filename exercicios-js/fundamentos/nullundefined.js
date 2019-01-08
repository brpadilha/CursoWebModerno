let valor //não inicializada

console.log(valor)

valor = null //ausência de valor, na realidade, define um valor vazio e não aponta para nenhum objeto na memória
console.log(valor)

//null é mt usado quando quer zerar o valor ou parar de setar uma variável, assim usar o null




const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco usar assim para deletar o objeto
console.log(produto)

produto.preco = null //sem preço

console.log(!!produto.preco)
console.log(produto)