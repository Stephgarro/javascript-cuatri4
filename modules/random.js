

import { apiUrl, headers } from './config.js';

function getRandomJoke() {
  fetch(apiUrl, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      const randomJokeElement = document.getElementById('randomJoke');
      randomJokeElement.textContent = data.joke;

      // Asignar el chiste a los elementos jokeVisualization y jokeVisual
      document.getElementById('jokeVisualization').innerText = data.joke;
      document.getElementById('jokeVisual').innerText = data.joke;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getRandomJoke;