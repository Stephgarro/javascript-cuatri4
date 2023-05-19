/// acceder al html 
const aleatoriBtn = document.getElementById('aleatoriBtn');
const specificBtn = document.getElementById('specificBtn');
const searchJoke = document.getElementById('searchJoke');
const jokeList = document.getElementById('jokeList');
const jokeContainer = document.querySelector('.container__paragraph');


// Agregar eventos a los botones
aleatoriBtn.addEventListener('click', getRandomJoke);

specificBtn.addEventListener('click', getSpecificJokes);


function getRandomJoke() {
    // Realizar una petición GET al API
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const randomJokeElement = document.getElementById('randomJoke');
        // se actualiza el ontenido con un chiste ramdom
        randomJokeElement.textContent = data.joke;
      })
      .catch((error) => {
        console.error(error);
      });
  }



// Función para obtener chistes especificos segun la palabra que ingresa el usuario 
function getSpecificJokes(event) {
  event.preventDefault();
  const searchTerm = searchJoke.value.trim();

  if (searchTerm === '') {
    // Limpiar la lista de chistes si no hay término de búsqueda
    jokeList.innerHTML = '';
    return;
  }

  // Realizar una petición GET al API con el término de búsqueda
  fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length === 0) {
        // Mostrar que no se encontraron chistes de ese tipo 
        jokeList.innerHTML = 'Dont exist this type of jokes ';
      } else {
        const jokes = data.results.map((result) => result.joke);
        jokeList.innerHTML = jokes[0] || '';
      }
    })
    .catch((error) => {
      console.error(error);
    });
}




