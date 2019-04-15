const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){ //call back, chamar uma função para resolver outra função
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante))

