// let index = 0; contagem para controle de vezes de execução
// index <= 10; faça enquanto index for menor < ou igual = a 10
// index ++ para cada vez executada adicione 1 ao valor

// caso01
for (
    let index01 = 0; 
    index01 <= 5; 
    index01++) 
    
{
    alert(`${index01}`)
}

// caso02
let index02 = 0;
for (
    alert('inicializando um for'); 
    index02 <= 5; 
    alert('finalizando um bloco de repetição')) 
    
{
    alert(`${index02}`);
    index02++
}

//caso 03
let index03 = 0;
let resposta = 0;
for (alert('inicializando um for'); index03 <= 0;) {
    do {
        alert(`${index03}`)
        index03 ++
        resposta = Number(prompt('Deseja continuar:\n1- Sim\n2- Não'));

    } while (resposta != 2);
}