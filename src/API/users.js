export async function users() {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  );
}
