

function addImagesToContainers() {
  // Obtén una referencia a los contenedores de imágenes
  var pictureContainers = document.getElementsByClassName("picture-container");

  // Crea una matriz de rutas de imágenes
  var imageSources = [
    "/images/product-case-black.jpg",
    "/images/product-pillow-black.jpg",
    "/images/product-poster-black.jpeg"
  ];

  // Itera sobre los contenedores de imágenes
  for (var i = 0; i < pictureContainers.length; i++) {
    // Crea un elemento de imagen
    var image = document.createElement("img");

    // Establece el atributo src de la imagen
    image.src = imageSources[i];

    // Agrega la clase "picture__size" a la imagen
    image.classList.add("picture__size");

    // Agrega la imagen al contenedor
    pictureContainers[i].appendChild(image);
  }
}

export default addImagesToContainers;
