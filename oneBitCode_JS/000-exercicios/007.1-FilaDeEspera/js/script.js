let opcao = 0;
let pasciente = [];
let pascienteNovo = ""
let pascienteAtendido = ""
do {
    opcao = Number(prompt("Digite uma opção:\n1- Adicionar pasciente\n2- Atender pasciente\n3- Ver a lista de espera\n4- Sair do sistema"));
    switch (opcao) {

        case 1: // Adcionar pasciente
        pascienteNovo = pasciente.push(prompt("Digite o nome do pasciente:"));
        alert(`O pasciente: ${pasciente[pascienteNovo-1]}, foi adcionado com sucesso.\nOrdem na fila: ${pascienteNovo}`);
            break;

        case 2: // Atender pasciente
        pascienteAtendido = pasciente.shift();
        if (pascienteAtendido != undefined) {
            alert(`O pasciente: ${pascienteAtendido} foi atendido e liberado!`)
        } else {
            alert("A fila de pasciente está vazia!")
        }
            break;

        case 3: // Ver a lista de espera
        if (pasciente != 0) {
            for (let index = 0; index < pasciente.length; index++) {
                const element = pasciente[index];
                alert(`O pasciente: ${pasciente[index]}, está na ordem de número: ${index +1 }`)
            }
        } else {
            alert("A fila de pasciente está vazia!")
        }  
            break;

        case 4: // Sair do sistema
            alert("Estamos encerrando o sistema!")
            break;
            
        default: //Erro de digitação
            alert("Digite uma opção válida!")
            break;
    }
} while (opcao != 4);