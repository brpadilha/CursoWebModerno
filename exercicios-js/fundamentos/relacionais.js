// = nao depende da tipagem
// == compara a tipagem
// === extritamente igual, compara a tipagem e o valor

console.log('01 -', '1' == 1)
console.log('02 -', '1' === 1)
console.log('03 -', '3' != 3)
console.log('04 -', '3' !== 3)

console.log('05 -', 3 < 2)
console.log('06 -', 3 > 2)
console.log('07 -', 3 <=2)
console.log('08 -', 3>=2)

const d1 = new Date(0) // pega a data 0 alocado na memória, sendo 1 de janeiro de 1970
const d2 = new Date(0)
console.log('09 -', d1 === d2) //vai dar falso pois a alocação na memória é diferente
console.log('010 -', d1 == d2)
console.log('011 -', d1.getTime() === d2.getTime())

console.log('012 -', undefined == null) //comparando só o valor, vai dar verdadeiro
console.log('013 -', undefined === null) // comparando valor e tipo, vai dar falso