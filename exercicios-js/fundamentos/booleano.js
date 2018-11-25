let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) //negando
console.log(!!isAtivo) //não falso

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos..')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) //not a number
console.log(!!undefined)
console.log(!!(isAtivo= false))

console.log('pra finalizar...')
console.log(!!('' || 0 || 'epa' )) // || é ou

let nome = 'Lucas'

console.log(nome || 'Desconhecido')
