
  import apiUrl from './config.js';

function getRandomJoke() {
  // Realizar una petición GET al API
  fetch(apiUrl, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const randomJokeElement = document.getElementById('randomJoke');
      // Se actualiza el contenido con un chiste random
      randomJokeElement.textContent = data.joke;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getRandomJoke;