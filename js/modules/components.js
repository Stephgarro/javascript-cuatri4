import { updateProductDisplay, updateProductPrice, updateJoke } from './productFunctions.js';

export const productComponent = {
  productChanged(productId) {
    let productImage, productTitle, productPrice, jokeColor;

    if (productId === "colorBlack") {
      productImage = "/images/product-shirt-black.jpg";
      productTitle = "black shirt";
      productPrice = 20;
      jokeColor = "white";
    } else if (productId === "colorWhite") {
      productImage = "/images/product-shirt-white.jpg";
      productTitle = "white shirt";
      productPrice = 18;
      jokeColor = "black";
    }

    updateProductDisplay(productImage, productTitle);
    updateProductPrice(productPrice);
    updateJokeColor(jokeColor);
  },

  jokeChanged() {
    const jokes = ["Joke 1", "Joke 2", "Joke 3"];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const newJoke = jokes[randomIndex];

    jokeSelected = newJoke;
    updateJoke(newJoke);
  }
};

export const titleComponent = {
  productChanged(productId) {
    let productTitle;

    if (productId === "colorBlack") {
      productTitle = "black shirt";
    } else if (productId === "colorWhite") {
      productTitle = "white shirt";
    }

    const titleElement = document.querySelector("#title");
    titleElement.textContent = productTitle;
  },

  jokeChanged() {
  }
};

export const priceComponent = {
  productChanged(productId) {
    let productPrice;

    if (productId === "colorBlack") {
      productPrice = 20;
    } else if (productId === "colorWhite") {
      productPrice = 18;
    }

    updateProductPrice(productPrice);
  },

  jokeChanged() {

  }
};

export const visualizationComponent = {
  productChanged(productId) {
    let productImage;

    if (productId === "colorBlack") {
      productImage = "/images/product-shirt-black.jpg";
    } else if (productId === "colorWhite") {
      productImage = "/images/product-shirt-white.jpg";
    }

    const displayImage = document.querySelector(".display__picture");
    displayImage.src = productImage;
  },

  jokeChanged() {
   
  }
};

export const jokeComponent = {
  productChanged(productId) {

  },

  jokeChanged() {
    updateJoke(jokeSelected);
  }
};

function updateJokeColor(color) {
  const jokeVisualization = document.querySelector("#jokeVisualization");
  jokeVisualization.style.color = color;
}