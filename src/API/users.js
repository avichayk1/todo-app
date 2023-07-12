async function getUsers(email, username) {
  const data = {
    email: email,
    username: username,
  };

  const requestOptions = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      'http://localhost:8080/users/login',
      requestOptions
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
// async function getUsers() {
//   return await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
//     res.json()
//   );
// }
export default getUsers;
// export default login;
