// função sem retorno, é normalmente usado ele não retornar alguma coisa

function imprimirSoma (a, b) {
    console.log (a + b)
}


imprimirSoma(2, 3)

imprimirSoma(2)

//funcao com retorno

function soma(a, b = 0){  //tratou como b sendo igual a 0
    return a + b
}

console.log (soma(2, 3))

console.log(soma(7))