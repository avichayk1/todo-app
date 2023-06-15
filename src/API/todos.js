export async function getTodos() {
  return await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
    res.json()
  );
}
export async function getTodosByID(id) {
  return await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  ).then((res) => {
    // console.log(res);
    return res.json();
  });
}
