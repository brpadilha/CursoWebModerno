const contadorA = require('./Aula126-InstanciaUnica')
const contadorB = require('./Aula126-InstanciaUnica')

const contadorC = require('./Aula126-InstanciaNova')()
const contadorD = require('./Aula126-InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)