// IF
// Se isso for verdadeiro faça isso

let nameDeUsuario = window.prompt("Digite seu nome?");
let iddDeUsuario = window.prompt("Digite sua idade?");
let resposta = window.confirm("Quer que seu nome seja exibido?");

if (resposta === true) {
    // se a condição for verdadeira faça oque está aqui

    window.alert(`Olá, ${nameDeUsuario}`)

} else if (resposta === false) {
    // se a condição for falsa faça oque está aqui

    window.alert(`Olá, Anônimo`)
}

if (iddDeUsuario >= 18) {
    window.alert(`Olá, Você é maior de idade`)

} else if ( iddDeUsuario >= 12) {
    window.alert(`Olá, Você é adolescente`)

} else if ( iddDeUsuario >= 4) {
    window.alert(`Olá, Você é criança`)

} else if ( iddDeUsuario > 1) {
    window.alert(`Olá, Você é um neni`)

} else {
    window.alert(`Olá, Você é um pacotinho`) 
}