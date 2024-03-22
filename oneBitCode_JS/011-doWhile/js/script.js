let velocidade = Number(prompt("Digite a velocidade do carro:"));

do { //faça
    alert(`O carro está a ${velocidade} km/h`);
    velocidade -= 10;
    alert("Velocidade diminuiu 10km/h");

} while (velocidade > 0); //enquanto

alert(`A velocidade é de ${velocidade}`);