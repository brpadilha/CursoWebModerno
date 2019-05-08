// Pega os elementos de um array e gera ele em outro array com mesmo tamanho mas de acordo com o parâmetro desejado

const nums = [1, 2, 3, 4, 5]

// For com propósito

let resultado = nums.map(function(e){
    return e*20
})

resultado.forEach(numero =>{
    console.log(numero)
})

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)