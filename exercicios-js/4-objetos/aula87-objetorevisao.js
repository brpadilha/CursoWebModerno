// coleção dinâmica de pares chave/valor

const produto = new Object // uma forma de criar objeto

produto.nome = 'Cadeira'

produto['marca de produto'] = 'Generica'

produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca de produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    proprietarios: {
        nome: 'Raul',
        idade: 56,
        enderecos: {
            logradouro: 'Rua ABC',
            numero: 124
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }]
    // ,
    // calcularValorSeguro: function() {
    //     //... 
    // }
}

carro.proprietarios.enderecos.numero = 1000
carro['proprietarios']['enderecos']['logradouro'] = 'Avenida Gigante' //forma mt trabalhosa

console.log(carro)

delete carro.condutores
delete carro.proprietarios.enderecos

console.log(carro)
console.log(carro.condutores)

