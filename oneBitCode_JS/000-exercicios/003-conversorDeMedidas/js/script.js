const valorEmMetros = Number(prompt("Digite o valor em metros:"));
const opcaoDeConversao = parseFloat(prompt("Digite a opção para qual deseja converter:\n1-mm\n2-cm\n3-dm\n4-dam\n5-hm\n6-km"));

let valorMultiplicado = valorEmMetros;

switch (opcaoDeConversao) {
    case 1:
        alert(`Valor em m: ${valorEmMetros} valor em mm: ${valorMultiplicado*1000}`)
        break;
    case 2:
        alert(`Valor em m: ${valorEmMetros} valor em cm: ${valorMultiplicado*100}`)
        break;
    case 3:
        alert(`Valor em m: ${valorEmMetros} valor em dm: ${valorMultiplicado*10}`)
        break;
    case 4:
        alert(`Valor em m: ${valorEmMetros} valor em dam: ${valorMultiplicado/10}`)
        break;
    case 5:
        alert(`Valor em m: ${valorEmMetros} valor em hm: ${valorMultiplicado/100}`)
        break;
    case 6:
        alert(`Valor em m: ${valorEmMetros} valor em km: ${valorMultiplicado/1000}`)
        break;
    default:
        alert("A opção digitada não é válida, tente novamente")
        break;
}