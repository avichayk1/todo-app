import React from 'react';
import { useState, useContext } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let current = '';
    let credentialsMatch = false;
    console.log(
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
          data.forEach((d) => {});
        })
    );
    let to = fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((d) => {});
      });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((user) => {
          if (user.email === email && user.username === username) {
            current = user;
            credentialsMatch = true;
          }
        });
        if (credentialsMatch) {
          localStorage.setItem('user', JSON.stringify(current));
          navigate('/home');
        } else {
          console.log('Invalid credentials');
        }
      });
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
