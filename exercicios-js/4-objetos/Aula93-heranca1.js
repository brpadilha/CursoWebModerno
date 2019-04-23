const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //mostra o protótipo de ferrari
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObhjeto() {}
console.log(typeof Object, typeof MeuObhjeto)
console.log(Object.prototype, MeuObhjeto.prototype)