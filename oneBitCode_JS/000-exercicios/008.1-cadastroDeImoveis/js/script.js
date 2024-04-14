const imoveis = [];
let opcao = 0;

do {
    opcao = Number(prompt(`Total de imóveis: ${imoveis.length}\n1- Cadastre um imóvel\n2- Imóveis disponiveis\n3- Sair`))
    
    switch (opcao) {
        case 1:
            const imovel = {};
            imovel.proprietário = prompt("Digite o nome do proprietário do imóvel:");
            imovel.quartos = prompt("Digite o número de quartos do imóvel:");
            imovel.banheiros = prompt("Digite número de banheiros do imóvel:");
            imovel.garagem = prompt("Digite o número de vagas na garagem do imóvel:");

            const confirmacao = confirm(`Salvar este imóvel?\nProprietário: ${imovel.proprietário}\nQuartos: ${imovel.quartos}\nBanheiros: ${imovel.banheiros}\nGaragem: ${imovel.garagem}`);

            if (confirmacao === true) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso!")
            }else{
                alert("Imóvel não foi salvo, Voltando ao menu!")
            }
            break;
        case 2:
            for (let i = 0; i < imoveis.length; i++) {
                alert(`
                Imóvel: ${i + 1}
                Proprietário: ${imoveis[i].proprietário}
                Quartos: ${imoveis[i].quartos}
                Banheiros: ${imoveis[i].banheiros}
                Garagem: ${imoveis[i].garagem}`)
            }
            
            break;
        case 3:
            alert("Saindo do programa!")
            break;
    
        default:
            alert("Digite uma opção válida!")
            break;
    }
} while (opcao !== 3);