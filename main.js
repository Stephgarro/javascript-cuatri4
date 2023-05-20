import  random from "./modules/random.js";
import specific from "./modules/specific.js";

/// acceder al html 
const aleatoriBtn = document.getElementById('aleatoriBtn');
const specificBtn = document.getElementById('specificBtn');



// Agregar eventos a los botones
aleatoriBtn.addEventListener('click',  getRandomJoke);

specificBtn.addEventListener('click', getSpecificJokes);










