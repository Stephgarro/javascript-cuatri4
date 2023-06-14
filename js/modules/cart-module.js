

// // Función que se ejecuta cuando se abre el carrito
// function openCart() {
//     // Realiza las acciones necesarias para abrir el carrito
//     // Puedes agregar aquí el código que despliega el carrito o realiza cualquier otra acción deseada
//     console.log("El carrito se ha abierto");
// }

// // Exporta la función openCart para que pueda ser utilizada en otros archivos
// export { openCart };

import { cartContent } from './dom-elements.js';

// Funcionalidad del carrito de compras
export function addToCart() {
  const visualizacion = document.getElementById('visualizacion');

  // Clonar el contenido de visualizacion
  const product = visualizacion.cloneNode(true);

  // Agregar el producto clonado al carro de compras
  cartContent.appendChild(product);

  // Agregar los datos adicionales al producto clonado
  const title = document.getElementById('title').cloneNode(true);
  const price = document.getElementById('price').cloneNode(true);
  const jokeVisual = document.getElementById('jokeVisual').cloneNode(true);

  product.appendChild(title);
  product.appendChild(price);
  product.appendChild(jokeVisual);
}

// Event listener para agregar al carrito
export function setupCartModule() {
  const addToCartButton = document.getElementById('addToCartBtn');
  addToCartButton.addEventListener('click', addToCart);
}

