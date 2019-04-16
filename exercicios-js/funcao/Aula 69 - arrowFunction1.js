let dobro1 = function(a){
    return 2 * a

}

dobro2 = (a) =>{
    return 2 * a
}

dobro3 = a => 2 * a //return implicito


console.log(dobro1(Math.PI))
console.log(dobro2(Math.PI))
console.log(dobro3(Math.PI))

let ola = function(){
    return "Olá!"
}

ola = () => 'Olá'

console.log(ola())