//.classes
//#ids
//nome do elemento
//div h1 => elementos dentro de outro elemento

//querySelector => seleciona apenas um elemento (o primeiro que ele encontrar que tenha as caracteristicas que passamos)
//querySelectorAll => seleciona todos os elementos e coloca dentro de um array

const body = document.querySelector("body"); 
const game = document.querySelector(".game");

const count = document.querySelector("h1");
const reset = document.querySelector(".reset");

const ash = document.querySelector("#ash");

const charmander = document.querySelector("#charmander");
const pikachu = document.querySelector("#pikachu");
const zubat = document.querySelector("#zubat");

body.addEventListener('keydown', (event) => { // Adiciona um evento de teclado ao body
    event.stopPropagation(); // Impede que o evento se propague para outros elementos

    console.log(event.code);
});