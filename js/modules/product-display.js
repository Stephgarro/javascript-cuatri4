// product-display.js

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
  
  export function updateJokeColor(color) {
    const jokeVisualization = document.querySelector("#jokeVisualization");
    jokeVisualization.style.color = color;
  }
  