export const albums = () => {
  return fetch('https://jsonplaceholder.typicode.com/albums').then((res) =>
    res.json()
  );
};
