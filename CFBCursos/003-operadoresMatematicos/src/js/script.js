/*
Operadores matemáticos:
    +
    -
    /
    *
    %
    ++
    --
    +=
    -=
*/

//declarando variáveis
let num1, num2
let num3 = 3, num4 = 4
let num5 = 5, num10 = 10
let res = 0
num1 = 1
num2 = 2

res = num1 + num2

console.log(num1)
console.log(num2)
console.log(res)

//direto no console.log
console.log(num2-num3)

//os parênteses tem preferência como na matemática
res = (num1 + num2) * num3
console.log(res)

res = num1 + num2 * num3
console.log(res)

//divisão e resto
console.log(res / 2)
console.log(res % 2)

//incremento e decremento
console.log(`incremento: ${num4}`)
num4 ++
console.log(num4)


console.log(`decremento: ${num3}`)
num3 --
console.log(num3)

// mais igual e menos igual
console.log(`mais igual +=: ${num5}`)
num5 += 5
console.log(`5 += 5 = ${num5}`)

console.log(`menos igual -=: ${num10}`)
num10 -= 5
console.log(`10 -= 5 = ${num10}`)