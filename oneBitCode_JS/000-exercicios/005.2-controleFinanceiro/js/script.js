const nameDeUsuario = prompt("Digite o seu nome?");
let montanteInicial = Number(prompt("Digite o saldo inicial em R$:"));
let valorExtra = 0;
let resposta = 0;

do {
     resposta = parseFloat(prompt(`Olá ${nameDeUsuario}, Seu saldo inicial é de: ${montanteInicial} R$.\nEscolha uma opção:\n1- Adicionar dinheiro\n2- Retirar dinheiro\n3- Sair do sistema`));

     switch (resposta) {

        case 1:
            valorExtra = Number(prompt("digite o valor que deseja adcionar:"));
            montanteInicial += valorExtra;
            alert(`O valor de ${valorExtra} R$, foi adcionado com sucesso.\nSeu saldo é de: ${montanteInicial}`);
            break;

        case 2:
            valorExtra = Number(prompt("digite o valor que deseja sacar:"));
            montanteInicial -= valorExtra;
            alert(`O valor de ${valorExtra} R$, foi transferido com sucesso.\nAguarde o dinheiro sair nesse caixa.\nSeu saldo é de: ${montanteInicial}`);
            break;

        case 3:
            alert("Agradecemos sua visita, tenha um bom dia!")
            break;
     
        default:
            alert("Essa opção é inválida, tente novamente!")
            break;
     }
} while (resposta != 3);