const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) //Bind vai amarrar o saudação na pessoa
falarDePessoa()