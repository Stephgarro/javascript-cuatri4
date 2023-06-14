// export function initializeModal() {
//     const openCartBtn = document.getElementById("openCartBtn");
//     const modal = document.getElementById("modal");
  
//     openCartBtn.addEventListener("click", function () {
//       modal.style.display = "block";
//     });
  
//     const closeBtn = modal.querySelector(".close");
//     closeBtn.addEventListener("click", function () {
//       modal.style.display = "none";
//     });
  
//     window.addEventListener("click", function (event) {
//       if (event.target === modal) {
//         modal.style.display = "none";
//       }
//     });
//   }


import { openCartButton, cartModal, closeBtn } from './dom-elements.js';

// Modal del carrito de compras
export function setupModalModule() {
  // Mostrar el modal al hacer clic en el botón de abrir el carrito
  openCartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
  });

  // Cerrar el modal al hacer clic en la "X"
  closeBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  // Cerrar el modal al hacer clic fuera del contenido del modal
  window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });
}

  
 

