export async function todos() {
  return await fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    (res) => res.json()
  );
  // .then((data) => {
  //   data.forEach((d) => {});
  // });
}
