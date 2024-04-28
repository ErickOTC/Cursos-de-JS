//---------------ex01---------------//
//escopo externo ao interno
let pokemon = "Charmander"; //escopo mais externo

function evoluir() {
    pokemon = "Charmeleon" //escopo mais interno
}

//console.log(pokemon);
evoluir();
//console.log(pokemon);

//---------------ex02---------------//
// escopo interno ao externo
function criarAnimal() {
    //let animal = "Gato"
}

criarAnimal();
//console.log(animal);

//---------------ex03---------------//
// var
function avaliarNota(nota) {
    if (nota>60) {
        var aprovado = true //fica disponível no escopo mais externo
        //let situacao = "Aprovado"
    } else {
        var aprovado = false //fica disponível no escopo mais externo
        //let situacao = "Reprovado"
    }
    
    console.log(nota);
    console.log(aprovado);
    //console.log(situacao);
}

avaliarNota(62);
avaliarNota(49);

//---------------ex04---------------//
// a variável var não funciona diretamente na function, somente dentro de uma condição como no exemplo 03
function ola() {
    //var texto = "Olá, Mundo!"
}

//console.log(texto);

//---------------ex05---------------//

console.log(nome);
console.log(sobrenome);

var nome = "Erick"; 
// a variável var sempre é a primeira coisa a ser lida.
let sobrenome = "Teodoro";

console.log(nome);
console.log(sobrenome);