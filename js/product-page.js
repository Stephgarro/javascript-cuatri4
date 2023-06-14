import { initRandomJokeComponent } from './modules/randomJokes.js';
import { renderSelectJoke } from './modules/products.js';
import { initDetails } from './modules/productDetails.js';
import { updateProductDisplay,updateProductPrice,updateJoke,subscribeToChanges,observer,} from './modules/productFunctions.js';
import { productComponent, titleComponent,priceComponent,visualizationComponent,jokeComponent,} from './modules/components.js';



import { addToCart, setupCartModule } from './modules/cart-module.js';
import { setupModalModule } from './modules/modal-module.js';


setupCartModule();
setupModalModule();


renderSelectJoke();
initDetails();
initRandomJokeComponent();


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






