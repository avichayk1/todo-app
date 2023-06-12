import './App.css';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './login.js';
import Register from './register.js';
import Home from './home.js';
import EnterPage from './enterPage';
import UserContextProvider from './context/UserContext';

export function App() {
  // const [isLogin, setisLogin] = useState(true);
  // const navigate = useNavigate(); // Initialize useNavigate hook

  // // Redirect function to navigate to the login page
  // const redirectToLogin = () => {
  //   navigate('/login');
  // };
  // const toggleForm = () => {
  //   setisLogin(!isLogin);
  // };

  return (
    <UserContextProvider>
      <Routes>
        <Route
          path="/login"
          element={
            <Login />
            // isLogin ? (
            //   <Login onFormSwitch={toggleForm} />
            // ) : (
            //   <Register onFormSwitch={toggleForm} />
            // )
          }
        ></Route>
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/"
          element={<EnterPage />}
        ></Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
