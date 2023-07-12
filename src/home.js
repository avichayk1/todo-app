import React, { useEffect, useState } from 'react';
import Todos from './component/Todos.js';
import { useNavigate } from 'react-router-dom';
import Albums from './component/Albums.js';
import Info from './component/Info.js';
import Posts from './component/Posts.js';

const Home = () => {
  const [mode, setMode] = useState('Info');
  const navigate = useNavigate();

  const serverClick = () => {
    fetch('http://localhost:8080')
      .then((response) => {
        // Check if the request was successful
        if (response.ok) {
          // Read the response body and return it as JSON
          // return response.json();
          return response;
        } else {
          throw new Error('Request failed');
        }
      })
      .then((data) => {
        console.log(data); // Log the response data
      })
      .catch((error) => {
        console.log(error); // Log any errors that occurred
      });
  };

  const logout = () => {
    localStorage.setItem(
      'user',
      JSON.stringify({
        user: null,
        admin: null,
      })
    );
    navigate('/login');
  };
  useEffect(() => {}, [mode]);
  return (
    <React.Fragment>
      <div style={{ backgroundColor: '#333333', padding: '20px' }}>
        <button
          className={`btn btn-outline-primary`}
          id="Logout"
          onClick={logout}
        >
          Logout
        </button>
        <button
          className={`btn btn-outline-primary ${
            mode === 'Albums' ? 'active' : ''
          }`}
          id="Albums"
          onClick={() => setMode('Albums')}
        >
          Albums
        </button>
        <button
          className={`btn btn-outline-primary ${
            mode === 'Posts' ? 'active' : ''
          }`}
          id="Posts"
          onClick={() => setMode('Posts')}
        >
          Posts
        </button>
        <button
          className={`btn btn-outline-primary ${
            mode === 'Todos' ? 'active' : ''
          }`}
          id="Todos"
          onClick={() => setMode('Todos')}
        >
          Todos
        </button>
        <button
          className={`btn btn-outline-primary ${
            mode === 'Info' ? 'active' : ''
          }`}
          id="Info"
          onClick={() => setMode('Info')}
        >
          Info
        </button>
        <button
          className={`btn btn-outline-primary`}
          id="Server"
          onClick={() => serverClick()}
        >
          Server
        </button>
        {mode === 'Todos' && <Todos />}
        {mode === 'Albums' && <Albums />}
        {mode === 'Posts' && <Posts />}
        {mode === 'Info' && <Info />}
        {/* {mode === 'Photos'} && <Photos /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
