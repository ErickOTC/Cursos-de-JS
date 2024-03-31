//---Objetos---//
/*  
    -chave-valor
        -chave = A chave é como um nome da propriedade.

        -valor = O valor é o Valor que está armazenado nessa propriedade (semelhante aos valores armazenados em variáveis).
    
    -referencia
        -Suas propriedades e funções podem ser referenciadas por encadeamento com ponto "." ou colchetes [].
*/

let nome = "prop";

let objeto = {};
objeto.prop = "Olá, Mundo!";

//console.log(`objeto.prop = ${objeto.prop}`);
console.log(`objeto[nome] = ${objeto[nome]}`);
console.log(`objeto["prop"] = ${objeto["prop"]}`);

let resposta = objeto.prop === objeto["prop"];
console.log(`objeto.prop === objeto["prop"]\nresposta: ${resposta}`);

resposta = objeto.prop === objeto[nome];
console.log(`objeto.prop === objeto[nome]\nresposta: ${resposta}`);

let funcao = "log";
console[funcao]("Oi, Mundo!");

// criando objetos
const usuario = {};
// criando os blocos user01
usuario.user01 = {};
usuario.user01.nome = {};
usuario.user01.endereco = {};

usuario.user01.nome.primeiroNome = "Erick";
usuario.user01.nome.sobrenome = "Teodoro";
usuario.user01.idade =  25;
usuario.user01.nascimento =  19031999;
usuario.user01.endereco.rua = "André Furtado de Mendonça";
usuario.user01.endereco.numero = 614;
usuario.user01.endereco.cep = "08191260";
usuario.user01.colegas = ["Jessica", "Edvaldo"];

// criando os blocos user02
usuario.user02 = {};
usuario.user02 = {};
usuario.user02.nome = {};
usuario.user02.endereco = {};

usuario.user02.nome.primeiroNome = "Jessica";
usuario.user02.nome.sobrenome = "Araujo";
usuario.user02.idade =  25;
usuario.user02.nascimento =  19121997;
usuario.user02.endereco.rua = "Salvador Balbino de Matos";
usuario.user02.endereco.numero = 720;
usuario.user02.endereco.cep = "08191260";
usuario.user02.colegas = ["Erick", "Marcelo"];


