const escola = "Cod3r"

console.log(escola.charAt(4)) //mostra a letra no índice 4 (r)
console.log(escola.charAt(5)) //mostra a letra no índice 5 (não encontrando, mostra a última)
console.log (escola.charCodeAt(3)) //mostra a letra num database html (registro?!?)
console.log(escola.indexOf("3")) //mostra em qual índice está a letra 3

console.log(escola.substring(1)) //mostrar sem os 2 primeiras letras
console.log(escola.substring(0, 3)) //mostrar entre a primeira e a letra do índice 3

console.log('Escola '.concat(escola).concat("!")) //concatena 
console.log(escola.replace(3, 'e')) //muda a letra no índice 3 pela letra "e"
console.log('Ana,Maria,Pedro'.split(',')) //faz um array separando pela vírgula
