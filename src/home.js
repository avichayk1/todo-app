import React from 'react';

import { users } from './API/users.js';
import { useState, useContext } from 'react';
import { ThemeProvider } from './themeContext.js';
import Todo from './component/Todo.js';
import UserContextProvider from './context/UserContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  console.log(
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
      res.json()
    )
  );

  const [todos, setTodos] = useState([]);
  const [posts, setposts] = useState([]);
  const [albums, setAlbums] = useState([]);
  return (
    // <React.Fragment>
    //   <h1>home</h1>
    // </React.Fragment>
    <UserContextProvider>
      <Todo></Todo>
    </UserContextProvider>
  );
};
export default Home;
