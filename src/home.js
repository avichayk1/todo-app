import React from 'react';
import { useState, useContext } from 'react';
import Todos from './component/Todos.js';
import { UserContext } from './context/UserContext';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const [todos, setTodos] = useState([]);
  const [posts, setposts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [user, setUser] = useContext(UserContext);

  return (
    <React.Fragment>
      <div style={{ backgroundColor: '#333333', padding: '20px' }}>
        <Todos></Todos>
      </div>
    </React.Fragment>
  );
};
export default Home;
