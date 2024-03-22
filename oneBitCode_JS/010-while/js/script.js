let velocidade = Number(prompt("Digite a velocidade do carro:"));

// ele executa oque está dentro até o valor ser menor que zero e sai do loop assim que termina as operações dentro do bloco
while (velocidade>0) { // enquanto
    alert(`O carro está a ${velocidade} km/h`);
    velocidade -= 10;
    alert("Velocidade diminuiu 10km/h");

    // o break encerra o loop instantaneamente
    if (velocidade === 20){
        break;
    }
}

alert(`A velocidade é de ${velocidade}`);