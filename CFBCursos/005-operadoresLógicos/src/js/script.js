// atalho: Ctrl ; (comenta oq estiver selecionado)

// and ou e operador &&
// or ou ou operador ||
// not ou não operador !

console.log(`tabela verdade:\n
operador: &&\n
0 && 0 = ${false&&false}\n
0 && 1 = ${false&&true}\n
1 && 0 = ${true&&false}\n
1 && 1 = ${true&&true}\n`)

console.log(`tabela verdade:\n
operador: ||\n
0 || 0 = ${false||false}\n
0 || 1 = ${false||true}\n
1 || 0 = ${true||false}\n
1 || 1 = ${true||true}\n`)

console.log(`tabela verdade:\n
operador: !\n
0 = ${false} / !0 = ${!false}\n
1 = ${true} / !1 = ${!true}\n`)

let num1 = 2, num2 = 5, num3 = 8, num4 = 10

alert(`exemplo:\n
${num1} < ${num2} = ${num1<num2}\n
${num3} < ${num4} = ${num3<num4}\n
${num1} < ${num2} && ${num3} < ${num4} = ${(num1<num2)&&(num3<num4)}\n

${num1} > ${num2} = ${num1>num2}\n
${num3} > ${num4} = ${num3>num4}\n
${num1} > ${num2} && ${num3} < ${num4} = ${(num1>num2)&&(num3>num4)}\n
`)