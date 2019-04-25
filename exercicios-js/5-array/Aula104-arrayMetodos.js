const pilotos = ['Vettel', 'Alonso', 'Raikonnen', 'Massa']

pilotos.pop() //massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //tira elemento da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') //coloca na primeira posição
console.log(pilotos)

// splice pode adicionar ou remover

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) //novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //do indice um até o anterior ao indice 4
console.log(algunsPilotos2)

