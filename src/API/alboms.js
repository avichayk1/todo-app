export async function getAlbums() {
  return await fetch('https://jsonplaceholder.typicode.com/albums').then(
    (res) => res.json()
  );
}
export async function getAlbumsByID(id) {
  return await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  ).then((res) => res.json());
}
