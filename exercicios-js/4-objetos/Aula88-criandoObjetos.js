// de forma literal

const obj1 = {}

console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras

function Produto (nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0,15)
const p2 = new Produto('Notebook', 2999.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const funcionario1 = criarFuncionario('João', 7980, 4)
const funcionario2 = criarFuncionario('Maria', 11400, 1)

console.log(funcionario1.nome, funcionario1.getSalario())
console.log(funcionario2.nome, funcionario2.getSalario())

//Object.create
 const filha = Object.create(null)
 filha.nome = 'Ana'
 console.log(filha)
 

 //Uma função famosa que retorna Objeto


 const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
 console.log(fromJSON.info)
