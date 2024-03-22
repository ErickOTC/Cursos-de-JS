//Menu interativo
let resposta = 0
do {
    resposta = Number(prompt("Digite uma das opções:\n1- HTML\n2- CSS\n3- JavaScript\n4- Sair"))

    switch (resposta) {
        case 1:
            alert("HTML")
            break;
        case 2:
            alert("CSS")
            break;
        case 3:
            alert("JavaScript")
            break;
        
        case 4:
            alert("O menu será fechado!")
            break;
    
        default:
            alert("[ERROR]: Digite um número válido")
            break;
    }
} while (resposta != 4);

