export function updateProductDisplay(productImage, productTitle, productPrice) {
    const displayImage = document.querySelector(".display__picture");
    const displayTitle = document.querySelector("#title");
  
    displayImage.src = productImage;
    displayTitle.textContent = productTitle;
    updateProductPrice(productPrice);
  }
  
  export function updateProductPrice(price) {
    const displayPrice = document.querySelector("#price");
    displayPrice.textContent = "$" + price;
  }
  
  export function updateJoke(joke) {
    const jokeVisualization = document.querySelector("#jokeVisualization");
    const renderJoke = document.querySelector("#renderJoke");
    jokeVisualization.textContent = "Joke: ";
    renderJoke.textContent = joke;
  }
  
  export function subscribeToChanges(observer) {
    const productRadios = document.querySelectorAll(".btn__color");
    const jokeButton = document.querySelector("#aleatoriBtn");
  
    productRadios.forEach(radio => {
      radio.addEventListener("change", () => {
        observer.productChanged(radio.id);
      });
    });
  
    jokeButton.addEventListener("click", () => {
      observer.jokeChanged();
    });
  }
  
  export const observer = {
    subscribers: [],
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    },
  
    productChanged(productId) {
      this.subscribers.forEach(subscriber => {
        subscriber.productChanged(productId);
      });
    },
  
    jokeChanged() {
      this.subscribers.forEach(subscriber => {
        subscriber.jokeChanged();
      });
    }
  };

  export function handleImageClick(event) {
    const clickedImage = event.target;
    const productId = clickedImage.getAttribute("data-product-id");
  
    // Llama a las funciones correspondientes en los componentes para actualizar los elementos
    productComponent.productChanged(productId);
    titleComponent.productChanged(productId);
    priceComponent.productChanged(productId);
    visualizationComponent.productChanged(productId);
  }

  const images = document.querySelectorAll(".picture__size");
images.forEach(image => {
  image.addEventListener("click", handleImageClick);
});


