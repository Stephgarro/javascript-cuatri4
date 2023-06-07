// async function getJokeId() {
//   const id = new URLSearchParams(window.location.search).get('id')
  
//   return id;
// }

// export { getJokeId }


async function getJokeId() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');
  
  return id;
}

export { getJokeId };