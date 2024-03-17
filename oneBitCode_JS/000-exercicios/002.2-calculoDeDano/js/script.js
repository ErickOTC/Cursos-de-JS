// MUV 
    // formula: V = Vo + a*t

    const vInicialA = parseFloat(prompt("Digite a velocidade do carro A:"));
    const vInicialB = Number(prompt("Digite a velocidade do carro B:"));

    if (vInicialA === vInicialB) {
        alert(`A velocidade do carro A é igual a do carro B.
        carro A: ${vInicialA} m/s
        carro B: ${vInicialB} m/s`)
    } else if (vInicialA > vInicialB) {
        alert(`A velocidade do carro A é maior que a do carro B.
        carro A: ${vInicialA} m/s
        carro B: ${vInicialB} m/s`)
    } else {
        alert(`A velocidade do carro B é maior que a do carro A.
        carro A: ${vInicialA} m/s
        carro B: ${vInicialB} m/s`)
    }