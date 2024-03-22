const turista = prompt("Olá turista, qual é o seu nome");
let cidades = "";
let continuar = confirm("Você visitou mais alguma cidade?");
let contagem = 0;

while (continuar === true) {
    let cidadeVisitada = prompt("Digite o nome da cidade que você visitou?\n exemplo: São Paulo - SP - Brasil")

    cidades += "\n" + cidadeVisitada
    contagem++
    continuar = confirm("Você visitou mais alguma cidade?");
}

alert(`Olá, ${turista} você visitou um total de ${contagem}.\nSendo elas:${cidades} `)