// não executável

//Procedural 
processamento(valor1, valor2, valor3)

//OO

objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        //...
    }
}

objeto.processamento() //foco passou a ser o objeto



carro = {
    cor,
    tamanho,
    peso,
    ligar(){

    },
    desligar(){

    }
}
//principios importantes:
//1 abstraçao - abstrair objetos do mundo real para o mundo da programação
//como um carro, uma casa etc

carro = {
    cor,
    tamanho,
    peso,
    ligar() {

    },
    desligar() {

    }
}

//2 - encapsulamento - ter os detalhes de implementação escondidos e só mostrar o que deve
//como um carro, como o carro funciona, os cavalos etc, não precisa de mostrar para o usuario
//mas a marcha, volante etc precisa.

//3 - herança (prototype)

//4 - polimorfismo - multiplas formas, igual um celular, que tem diferentes marcas