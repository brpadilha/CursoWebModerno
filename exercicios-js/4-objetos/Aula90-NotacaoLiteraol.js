const a = 1
const b = 2
const c = 3

//antes do es6
const obj1 = {
    a: a,
    b: b,
    c: c
}
//depois do es6
const obj2 = (a, b, c)
console.log(obj1, obj2)

const nomeAtriuto = 'nota'
const valorAtributo = 7.86

const obj3 = {}
obj3[nomeAtriuto] = valorAtributo
console.log(obj3)

const obj4 ={[nomeAtriuto]: valorAtributo}
console.log(obj4)


const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj5)