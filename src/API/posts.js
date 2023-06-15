export async function getPosts() {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
}
export async function getPostsByID(id) {
  return await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  ).then((res) => res.json());
}
