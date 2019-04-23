// Cadeia de protótipos (prototype hain)

Object.prototype.attr0 = '0' //não faça isso em casa!

const avo = {
    attr1: 'A'
}
const pai = {
    __proto__: avo,
    attr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velAtual
        }
    },
    status() {
        return `${this.modelo}: ${this.velAtual}km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing

}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
        
    }
}

Object.setPrototypeOf(ferrari, carro) //seta que a ferrari é um protótipo de carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())