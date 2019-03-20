function rand ([min = 0, max = 1000]) { //vai transformar agora em um array, podendo passar somente o valor máximo e mínimo
    if (min > max) [min,max] = [max,min] //vai verificar se o valor máximo é meio que o mínimo
    const valor = Math.random() * (max - min) + min //trazendo um número randomico
    return Math.floor(valor) // Math.floor arredonda para baixo
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([])) 