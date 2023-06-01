import  getRandomJoke from "./modules/random.js";
import getSpecificJokes  from "./modules/specific.js";
import addImagesToContainers from "./modules/products.js";



const aleatoriBtn = document.getElementById('aleatoriBtn');
const specificBtn = document.getElementById('specificBtn');

addImagesToContainers();

aleatoriBtn.addEventListener('click',  getRandomJoke);

specificBtn.addEventListener('click', getSpecificJokes);









