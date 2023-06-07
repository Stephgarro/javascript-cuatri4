// import { logErrors } from "./errors.js";

// const apiUrl = 'https://icanhazdadjoke.com/';
// const headers = {
//   Accept: 'application/json',
// };

// // random
// async function getRandomJoke() {
//   return fetch(apiUrl, {
//     headers: headers,
//   })
//     .then((response) => {
//       return response.json()
//     })
//     .catch(logErrors());
// }

// // search
// async function getJokeByTerm(searchTerm) {
//   if (!searchTerm) {
//     return;
//   }

//   return fetch(`${apiUrl}search?term=${searchTerm}`, {
//     headers: headers,
//   })
//     .then((response) => response.json())
//     .catch(logErrors());
// }

// // byId
// async function getJokeById(id) {
//   if (!id) {
//     return;
//   }

//   return fetch(`${apiUrl}j/${id}`, {
//     headers: headers,
//   })
//     .then((response) => response.json())
//     .catch((error) => {
//       logErrors();
//     });
// }

// export { getRandomJoke, getJokeByTerm, getJokeById }


import { logErrors } from "./errors.js";

const apiUrl = 'https://icanhazdadjoke.com/';
const headers = {
  Accept: 'application/json',
};

// random
const getRandomJoke = async () => {
  try {
    const response = await fetch(apiUrl, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    logErrors();
  }
}

// search
const getJokeByTerm = async (searchTerm) => {
  if (!searchTerm) {
    return;
  }

  try {
    const response = await fetch(`${apiUrl}search?term=${searchTerm}`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    logErrors();
  }
}

// byId
const getJokeById = async (id) => {
  if (!id) {
    return;
  }

  try {
    const response = await fetch(`${apiUrl}j/${id}`, { headers });
    const data = await response.json();
    return data;
  } catch (error) {
    logErrors();
  }
}

export { getRandomJoke, getJokeByTerm, getJokeById };