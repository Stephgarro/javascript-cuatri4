// visualization-component.js

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
      // No se necesita realizar ninguna acción en este componente para los cambios de chiste
    }
  };
  