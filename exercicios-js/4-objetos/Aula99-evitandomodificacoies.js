// Object.preventExtensions - nao pode adicionar novos atributos, pode excluir e modificar atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal - não pode adicionar novos atributos, nao pode excluir os atributos mas pode modificar

const pessoa = {
    nome: 'Juliano',
    idade: 34
}

Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

// Object.freeze = nao pode adicionar novos atributos, nao pode excluir e nem modificar atributos

