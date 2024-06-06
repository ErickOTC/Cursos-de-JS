/*
*operadores relacionais
    > maior
    >= maior e igual
    < menor
    <= menor ou igual
    = recebe um valor
    == comparação de valores
    === comparação identicos, compara valores e typeof
    != diferente
*/

let num1 = 10, num2 = 5, num3 = 15, num4 = 10, num5 = '10'
//maior
console.log(`${num1} > ${num2} Resposta: ${num1>num2}`)
console.log(`${num1} > ${num4} Resposta: ${num1>num4}`)

//menor
console.log(`${num1} < ${num3} Resposta: ${num1<num3}`)
console.log(`${num1} < ${num2} Resposta: ${num1<num2}`)

//maior ou igual
console.log(`${num1} >= ${num2} Resposta: ${num1>=num2}`)
console.log(`${num1} >= ${num4} Resposta: ${num1>=num4}`)
console.log(`${num1} >= ${num3} Resposta: ${num1>=num3}`)

//menor ou igual
console.log(`${num1} <= ${num2} Resposta: ${num1<=num2}`)
console.log(`${num1} <= ${num4} Resposta: ${num1<=num4}`)
console.log(`${num1} <= ${num3} Resposta: ${num1<=num3}`)

//igual
console.log(`${num1} == ${num4} Resposta: ${num1==num4}`)
console.log(`${num1} == '10' Resposta: ${num1==num5}`)

//identico
console.log(`${num1} === "10" Resposta: ${num1===num5}`)

//negação
console.log(`!(${num1} == ${num4}) Resposta: ${!(num1==num4)}`)
console.log(`!(${num1} == "10") Resposta: ${!(num1==num5)}`)
console.log(`!(${num1} === "10") Resposta: ${!(num1===num5)}`)

//diferença
console.log(`${num1} != ${num4} Resposta: ${num1!=num4}`)
console.log(`${num1} != "10" Resposta: ${num1!=num5}`)

//diferença e identico
console.log(`${num1} !== ${num4} Resposta: ${num1!==num4}`)
console.log(`${num1} !== "10" Resposta: ${num1!==num5}`)