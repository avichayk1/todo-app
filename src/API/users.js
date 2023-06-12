async function getUsers() {
  return await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  );
}
export default getUsers;
