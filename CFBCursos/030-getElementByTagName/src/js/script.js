//pegando o elemento
const divHTML = document.getElementById('html')
const divCSS = document.getElementById('css')
const divJS = document.getElementById('javaScript')
const divMySQL = document.getElementById('mySQL')
const divPHP = document.getElementById('php')
const divReact = document.getElementById('react')

//cria um array com os elementos
const arrayElementos = [divHTML, divCSS, divJS, divMySQL, divPHP, divReact]

//cria um HTMLCollection
let colecaoHTMLCollection = document.getElementsByTagName('div')

//transformando HTMLCollection em array com spread...
colecaoHTMLCollection = [...document.getElementsByTagName('div')]

console.log(arrayElementos)
console.log(colecaoHTMLCollection)

//iterando uma array com o método map
colecaoHTMLCollection.map((element)=>{
    console.log(element)
})