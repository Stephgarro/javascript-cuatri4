const searchJoke = document.getElementById('searchJoke');
const jokeList = document.getElementById('jokeList');
const jokeContainer = document.querySelector('.container__paragraph');



import { apiUrl, headers } from './config.js';

function getSpecificJokes(event) {
  event.preventDefault();
  const searchTerm = searchJoke.value.trim();

  if (searchTerm === '') {
    jokeList.innerHTML = '';
    return;
  }

  fetch(`${apiUrl}search?term=${searchTerm}`, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length === 0) {
        jokeList.innerHTML = 'Dont exist this type of jokes';
      } else {
        const jokes = data.results.map((result, index) => ({
          id: `joke-${index + 1}`,
          text: result.joke,
        }));

        jokeList.innerHTML = '<ul>' + jokes.map(joke => `<li><a href="product.html" id="${joke.id}">${joke.text}</a></li>`).join('') + '</ul>';
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getSpecificJokes;