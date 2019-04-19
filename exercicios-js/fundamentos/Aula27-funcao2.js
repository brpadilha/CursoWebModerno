// Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b)
    
}

imprimirSoma(2,3)

//armazenando uma funcao arrow em uma variável

const soma = (a, b) => { // => substitui a palavra function

        return a + b
}

console.log(soma(5,6))

//retorno implicito

const subtracao = (a, b) => a-b 
console.log(subtracao(2,8))

const imprimir2 = a => console.log(a)
imprimir2 ('Legal!1!')