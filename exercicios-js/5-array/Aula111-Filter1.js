const produtos = [{
        nome: 'Notebook',
        preco: 2499,
        fragil: true
    },
    {
        nome: 'iPad Pro',
        preco: 4199,
        fragil: true
    },
    {
        nome: 'Copo de Vidro',
        preco: 12.48,
        fragil: true
    },
    {
        nome: 'Copo Plastico',
        preco: 18.99,
        fragil: false
    },
    {
        nome: 'Carro',
        preco: 20000,
        fragil: false
    },
]

console.log(produtos.filter(function (p) {
    return p.preco > 200 //retorna precos maiores que 200
}))

console.log(produtos.filter(function (p) {
    return false //retorna nada
}))

// console.log(produtos.filter(function (p) { //exercicio proposto de produto caro e fragil
//     return p.preco > 500 && p.fragil
// }))


//forma feita pelo professor
const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil))