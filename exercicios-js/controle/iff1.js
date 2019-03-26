function SoNotaBoa(nota){
    if (nota>=7){
        console.log('Parabéns você passou, sua nota é: ' + nota)
    }
}

SoNotaBoa(8.1)
SoNotaBoa(6.1)

function seForVerdadeEuFalo(valor){
    if (valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo() //falso
seForVerdadeEuFalo(null)//falso
seForVerdadeEuFalo(undefined)//falso
seForVerdadeEuFalo(NaN)//falso
seForVerdadeEuFalo('')//falso
seForVerdadeEuFalo(0)//falso
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})