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

  
  export default getRandomJoke;