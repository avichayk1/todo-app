import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { BrowserRouter, useNavigate, useParams } from 'react-router-dom';
import { getPhotosByID } from '../API/photos';
import { UserContext } from '../context/UserContext';
import { AlbumContext } from '../context/AlbumContext';
import Photo from './photo';

import Post from './Post';
const Photos = (props) => {
  const params = useParams();
  const [photosList, setPhotosList] = useState([]);
  const [photoCount, setPhotoCount] = useState(0);
  const [enable, setenable] = useState(true);
  const [user, setUser] = useContext(UserContext);

  const isLoading = useRef(true);

  useEffect(() => {
    // if (isLoading.current) {
    getPhotosByID(params['id'], photoCount)
      .then((data) => {
        if (data.length) {
          setPhotosList(data);
        } else {
          setenable(false);
        }
      })
      .catch((error) => {
        console.log('Error fetching users:', error);
      });
    // const data = getPhotosByID(params['id'], photoCount);
    // // .then((data) => {
    // console.log(data);
    // setPhotosList(data);
    // })
    //   .catch((error) => {
    //     console.log('Error fetching users:', error);
    //   });
    // isLoading.current = false;
    // }
  }, [photoCount]);
  const getMorePhotos = () => {
    setPhotoCount((prevCount) => prevCount + 10);
    // importPhotos();
  };
  return (
    <div
      className="container"
      style={{ backgroundColor: '#333333', padding: '20px' }}
    >
      <h1 className="mb-4 display-4 fw-bold text-white  p-3 rounded">
        photosList
      </h1>
      <h2 className="mb-4 display-4 fw-bold text-white p-3 rounded">Photos</h2>
      <div className="mb-4">
        {photosList.map((photo, index) => (
          <Photo
            key={photo.id}
            // handleTodoClick={handlePostClick}
            photoItem={photo}
            // handleChange={handleChange}
          />
        ))}
      </div>
      <div className="button-container">
        {enable && (
          <button
            id="load-more-button"
            onClick={getMorePhotos}
            className="load-more-button"
          >
            Load 10 More
          </button>
        )}
      </div>
    </div>
  );
};
export default Photos;
