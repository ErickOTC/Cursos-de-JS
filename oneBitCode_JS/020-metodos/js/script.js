let pessoa = {
    nome: "Erick",
    idade: 25,

    dizerOla() {
        console.log(`Olá, mundo! Meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ciências da computação.`)
    }
}

console.log(pessoa);
pessoa.dizerOla();