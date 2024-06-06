//getElementsByClassName - HTMLCollection
const todosCursos = document.getElementsByClassName('curso')
console.log(todosCursos)

// transformando HTMLCollection em array com o método spread...
const arrayTodosCursos = [...document.getElementsByClassName('curso')]
const arrayCursosM1 = [...document.getElementsByClassName('m1')]
const arrayCursosM2 = [...document.getElementsByClassName('m2')]

console.log(arrayTodosCursos)
console.log(arrayCursosM1)
console.log(arrayCursosM2)

arrayCursosM2.map((element)=>{
    element.classList.add('destaque')
})

//pegando um curso em específico
const cursoEspecial = document.getElementsByClassName('curso')[0] 

console.log(cursoEspecial)