
//pessoa -> 123 -> {...}
const pessoa = {
    nome: 'João'
}
console.log(pessoa)

pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa <- 456 -> {...}
// pessoa = {nome: 'Ana'} DA PROBLEMA, não da para atribuir para a constante mais de uma vez

Object.freeze(pessoa) //irá congelar a constante, não podendo mais muda-lo

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
console.log(pessoa.nome) 
console.log(pessoa)