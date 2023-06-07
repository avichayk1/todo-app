import React from 'react';

import { users } from './API/users.js';
import { useState, useContext } from 'react';
import { UserContext } from './context/UserContext';
import Todo from './component/Todo.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  console.log(
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
      res.json()
    )
  );
  const [user, setUser] = useContext(UserContext);
  const [todos, setTodos] = useState([]);
  const [posts, setposts] = useState([]);
  const [albums, setAlbums] = useState([]);
  return (
    // <React.Fragment>
    //   <h1>home</h1>
    // </React.Fragment>
    <React.Fragment>
      <Todo></Todo>
    </React.Fragment>
  );
};
export default Home;
