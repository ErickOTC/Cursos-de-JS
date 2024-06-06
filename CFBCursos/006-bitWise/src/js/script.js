let num1 = 11, num2 = 10, num3 = 12, num4 = 3

// equivalência de bit 
let res1 = num1 & num2

alert(`
soma os bits que contem o valor 1 em ambos os binários:\n
decimal 1: ${num1}\n
binário 1: 1011\n
decimal 2: ${num2}\n
binário 2: 1010\n
decimal resposta: ${res1}\n
binário resposta: 1010\n
`)


// or um ou outro
let res2 = num1 | num2

alert(`
soma os bits que contem o valor 1 em um dos binários:\n
decimal 1: ${num1}\n
binário 1: 1011\n
decimal 2: ${num2}\n
binário 2: 1010\n
decimal resposta: ${res2}\n
binário resposta: 1011\n
`)


// somente se um dos valore for 1 (xor)
let res3 = num3 ^ num4

alert(`
soma os bits que contem o valor 1 em um dos binários:\n
decimal 1: ${num3}\n
binário 1: 1100\n
decimal 2: ${num4}\n
binário 2: 0011\n
decimal resposta: ${res3}\n
binário resposta: 1111\n
`)


//desloca os bits
let dobro = num2 << 1
let dobro2 = num2 << 2
alert(`
desloca o bit dobrando o valor:\n
decimal: ${num2}\n
binário: 1010\n
decimal x1: ${dobro}\n
binário x1: 10100\n
decimal x2: ${dobro2}\n
binário x2: 101000\n
`)

let metade = dobro2 >> 1
let metade2 = dobro2 >> 2
alert(`
desloca o bit dividindo o valor:\n
decimal: ${dobro2}\n
binário: 101000\n
decimal x1: ${metade}\n
binário x1: 10100\n
decimal x2: ${metade2}\n
binário x2: 1010\n
`)