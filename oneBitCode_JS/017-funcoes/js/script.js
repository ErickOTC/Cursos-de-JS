//funções em js

function ola () {
    console.log("Olá, Mundo!")
}

ola();

//parâmetros

function dobro (x){
    console.log(`O dobro de ${x} é ${(x*2)}`);
}

dobro(5);
//------------------------------//

function diz (nome = "Erick"){
    console.log(`Olá, ${nome}`);
}

diz("Jessica");
diz();
//------------------------------//

function soma (a, b){
    console.log(`O resultado da soma entre ${a} + ${b} é igual a ${a+b}`);
}

soma(7, 2);
soma(0, 1);
//------------------------------//

function criarUsuario (nmr, nome, sobrenome, idade, endereco){
    const usuario = {
        nome: nome, // igual a nome,
        sobrenome: sobrenome, // igual a sobrenome,
        idade: idade, // igual a idade,
        endereco: endereco, // igual a endereco,
    }
    console.log(`Nome: ${nome}\nSobrenome: ${sobrenome}\nIdade: ${idade}\nEndereço: ${endereco}`);
}

criarUsuario("Erick", "Teodoro", 25, "André Furtado de Mendonça");
//------------------------------//
