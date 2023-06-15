export async function getPhotosByID(albumId, photoCount) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=10&_start=${photoCount}`
  );
  const data = await response.json();
  return data;
}
