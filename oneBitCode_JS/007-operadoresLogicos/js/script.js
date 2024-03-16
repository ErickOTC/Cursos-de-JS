// Portas lógicas

// porta E / AND, Multiplicação
let f = 0;
let t = 1;

let a1 = f&&f;
let a2 = f&&t;
let a3 = t&&f;
let a4 = t&&t;

window.alert(`Porta lógica E / AND:
Obs: essa porta lógica funciona como a multiplicação na matemática.

P       Q       P&Q
${f}        ${f}         ${a1}       
${f}        ${t}         ${a2}       
${t}        ${f}         ${a3}
${t}        ${t}         ${a4}           
`)

let o1 = f||f;
let o2 = f||t;
let o3 = t||f;
let o4 = t||t;

window.alert(`Porta lógica OU / OR:
Obs: essa porta lógica funciona como a Soma na matemática.

P       Q       P&Q
${f}        ${f}         ${o1}       
${f}        ${t}         ${o2}       
${t}        ${f}         ${o3}
${t}        ${t}         ${o4}           
`)

window.alert(`Porta lógica NÂO / NOT:
Obs: essa porta lógica funciona como a Soma na matemática.

P               !P       
${false}        ${!false}    
${true}         ${!true}    
${0}               ${1}
${1}               ${0}        
`)