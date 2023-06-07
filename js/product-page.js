import { initRandomJokeComponent } from './modules/randomJokes.js';
import { renderSelectJoke } from './modules/products.js';
import { initDetails } from './modules/productDetails.js';

renderSelectJoke();
initDetails();
initRandomJokeComponent();

import { updateProductDisplay,updateProductPrice,updateJoke,subscribeToChanges,observer,} from './modules/productFunctions.js';
import { productComponent, titleComponent,priceComponent,visualizationComponent,jokeComponent,} from './modules/components.js';


observer.subscribe(productComponent);
observer.subscribe(titleComponent);
observer.subscribe(priceComponent);
observer.subscribe(visualizationComponent);
observer.subscribe(jokeComponent);


subscribeToChanges(observer);


const pictureContainers = document.getElementsByClassName("picture-container");


const imageUrls = ["/images/product-case-black.jpg", "/images/product-pillow-black.jpg", "/images/product-poster-black.jpeg"];


for (let i = 0; i < pictureContainers.length; i++) {
  const imageUrl = imageUrls[i];
  const pictureContainer = pictureContainers[i];

  
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  imageElement.alt = `Imagen ${i + 1}`;
  imageElement.classList.add("picture__size");


  pictureContainer.appendChild(imageElement);
}

const pictureElements = document.querySelectorAll(".picture__size");
pictureElements.forEach((pictureElement) => {
  pictureElement.addEventListener("click", function() {
    const imageUrl = this.src;

    
    const changeImagenElement = document.getElementById("changeImagen");
    changeImagenElement.src = imageUrl;
    changeImagenElement.alt = this.alt;
  });
});


///////////////////////////////////////
// const pictureContainers = document.querySelectorAll(".picture-container");

const prices = {
  "/images/product-case-black.jpg": "$7",
  "/images/product-case-white.jpg": "$5",
  "/images/product-poster-black.jpeg": "$5",
  "/images/product-poster-white.jpeg": "$3",
  "/images/product-shirt-black.jpg": "$13",
  "/images/product-shirt-white.jpg": "$10",
  "/images/product-pillow-black.jpg": "$15",
  "/images/product-pillow-white.jpg": "$12"
};

const titles = {
  "/images/product-case-black.jpg": "Case de teléfono negro",
  "/images/product-case-white.jpg": "Case de teléfono blanco",
  "/images/product-poster-black.jpeg": "Poster negro",
  "/images/product-poster-white.jpeg": "Poster blanco",
  "/images/product-shirt-black.jpg": "Camisa negra",
  "/images/product-shirt-white.jpg": "Camisa blanca",
  "/images/product-pillow-black.jpg": "Almohada negra",
  "/images/product-pillow-white.jpg": "Almohada blanca"
};

pictureContainers.forEach((container) => {
  container.addEventListener("click", function() {
    // Obtener la imagen y su URL
    const imageElement = this.querySelector("img");
    const imageUrl = imageElement.src;

    // Cambiar la imagen principal
    const changeImagenElement = document.getElementById("changeImagen");
    changeImagenElement.src = imageUrl;
    changeImagenElement.alt = imageElement.alt;

    // Obtener el precio y título correspondientes
    const price = prices[imageUrl];
    const title = titles[imageUrl];

    // Obtener el elemento de información dentro del contenedor actual
    const infoElement = this.querySelector(".info");

    // Actualizar el precio y título en el elemento de información
    infoElement.querySelector(".price").textContent = price;
    infoElement.querySelector(".title").textContent = title;
  });
});


