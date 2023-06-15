import './App.css';
import React, { useState, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './login.js';
import Register from './register.js';
import Home from './home.js';
import EnterPage from './enterPage';
import NotFound from './component/notfound';
import UserContextProvider from './context/UserContext';
import AlbumContextProvider from './context/AlbumContext';
import Photos from './component/Photos';

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
      <AlbumContextProvider>
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
            path="/home/:id"
            element={<Home />}
          />
          <Route
            path="/home/:id/albums/:id/photos"
            element={<Photos />}
          />
          <Route
            path="/"
            element={<EnterPage />}
          ></Route>
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>{' '}
      </AlbumContextProvider>
    </UserContextProvider>
  );
}

export default App;
