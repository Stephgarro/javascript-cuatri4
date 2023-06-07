// title-component.js

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
      // No se necesita realizar ninguna acción en este componente para los cambios de chiste
    }
  };
  