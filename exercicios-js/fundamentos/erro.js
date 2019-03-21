function tratarErroELancar(erro) {
    // throw new Error ('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //vai tentar o erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { //caso gere erro, irá pegar o erro para tratar
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {
    nome: 'Roberto' //nome esta escrito errado para mostrar o erro
}
imprimirNomeGritado(obj)