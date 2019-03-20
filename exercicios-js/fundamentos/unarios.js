let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //vai dar verdadeiro, pois o -- só vem decrementando depois da comparação
console.log(num1 === num2)