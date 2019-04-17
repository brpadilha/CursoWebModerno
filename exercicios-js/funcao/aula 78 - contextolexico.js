const valor = 'Global'

function minhaFuncao(){
    //aqui teria q ter o valor local para aparecer local
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

