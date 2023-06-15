import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import getUsers from './API/users';
const Login = (props) => {
  // const userString = localStorage.getItem('user');
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log('Error fetching users:', error);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let current = '';
    let credentialsMatch = false;
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => res.json())
    //   .then((data) => {
    users.forEach((u) => {
      if (u.email === email && u.username === username) {
        current = u;
        console.log(user);
        setUser(user);
        credentialsMatch = true;
      }
    });
    if (credentialsMatch) {
      const userData = JSON.stringify(current);
      localStorage.setItem('user', userData);
      setUser(current);
      navigate(`/home/${user.id}`);
    } else {
      console.log('Invalid credentials');
    }
    // });
  };
  return (
    <React.Fragment>
      <div className="d-grid gap-1 col-1 mx-auto">
        <h1
          className="display-1"
          color="Green"
        >
          Login
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group input-group-lg mb-3">
          <label
            className="input-group-text"
            htmlFor="username"
          >
            username
          </label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form-control"
            type="username"
            placeholder="your username here"
            id="username"
            name="username"
          ></input>
        </div>
        <br />
        <div className="input-group input-group-lg mb-3">
          <label
            className="input-group-text"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="your email here"
            id="email"
            name="email"
          ></input>
        </div>
        <br />

        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Login
          </button>
        </div>
      </form>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          onClick={() => props.onFormSwitch()}
          className="btn btn-primary btn-lg"
        >
          Dont have an account? Register here
        </button>
      </div>
    </React.Fragment>
  );
};

export default Login;
