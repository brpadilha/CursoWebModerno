//Array em javascript é um objeto e separado em indices

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Ana', 'Carlos', 'Maria') //não muito utilizado

console.log(aprovados)

aprovados = ['Ana', 'Pedro', 'Carlos']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // adicionando um elemento ao indice 3
aprovados.push('Abia') //outra forma de adicionar um elemento em um array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) //irão existis os outros indices, mas com valores indefinidos
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //irá colocar em ordem alfabética
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1, 1) //pode adicionar elementos, remover ou remover e adicionar elementos
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // aqui vai excluir o primeiro e o segundo
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento 2') // adiciona dois elementos
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento 2') // exclui os dois ultimos e adiciona dois elementos
console.log(aprovados)
