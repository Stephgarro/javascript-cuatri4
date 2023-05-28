const searchJoke = document.getElementById('searchJoke');
const jokeList = document.getElementById('jokeList');
const jokeContainer = document.querySelector('.container__paragraph');


import apiUrl from './config.js';

// function getSpecificJokes(event) {
//   event.preventDefault();
//   const searchTerm = searchJoke.value.trim();

//   if (searchTerm === '') {
//     jokeList.innerHTML = '';
//     return;
//   }

//   fetch(`${apiUrl}search?term=${searchTerm}`, {
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.results.length === 0) {
//         jokeList.innerHTML = 'Dont exist this type of jokes';
//       } else {
//         const jokes = data.results.map((result) => result.joke);
//         jokeList.innerHTML = jokes.join('<br><br>');
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// export default getSpecificJokes


function getSpecificJokes(event) {
  event.preventDefault();
  const searchTerm = searchJoke.value.trim();

  if (searchTerm === '') {
    jokeList.innerHTML = '';
    return;
  }

  fetch(`${apiUrl}search?term=${searchTerm}`, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.results.length === 0) {
        jokeList.innerHTML = 'Dont exist this type of jokes';
      } else {
        const jokes = data.results.map((result) => result.joke);
        jokeList.innerHTML = '<ul>' + jokes.map(joke => `<li>${joke}</li>`).join('') + '</ul>';
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getSpecificJokes;