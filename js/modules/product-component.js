// product-component.js

import {
    updateProductDisplay,
    updateProductPrice,
    updateJokeColor
  } from "./product-display.js";
  
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
  
      updateProductDisplay(productImage, productTitle, productPrice);
      updateJokeColor(jokeColor);
    },
  
    jokeChanged() {
      // Lógica para obtener un nuevo chiste
      const jokes = ["Joke 1", "Joke 2", "Joke 3"];
      const randomIndex = Math.floor(Math.random() * jokes.length);
      const newJoke = jokes[randomIndex];
  
      jokeSelected = newJoke;
      updateJoke(newJoke);
    }
  };
  