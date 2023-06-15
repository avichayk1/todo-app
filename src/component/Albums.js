import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { getAlbums, getAlbumsByID } from '../API/alboms';
import { UserContext } from '../context/UserContext';
import { AlbumContext } from '../context/AlbumContext';

import Album from './Album';
const Posts = (props) => {
  const [albumsList, setAlbumsList] = useState([]);
  const [albumNum, setalbumNum] = useContext(AlbumContext);
  const [user, setUser] = useContext(UserContext);
  const [sorting, setSorting] = useState('All'); // default sorting option
  const isLoading = useRef(true);

  useEffect(() => {
    if (isLoading.current) {
      getAlbumsByID(user.id)
        .then((data) => {
          setAlbumsList(data);
        })
        .catch((error) => {
          console.log('Error fetching users:', error);
        });
      isLoading.current = false;
    }
  }, [albumsList]);
  return (
    <div
      style={{ backgroundColor: '#333333', padding: '20px' }}
      className="container"
    >
      <h1 className="mb-4 display-4 fw-bold text-white  p-3 rounded">
        AlbumsList
      </h1>
      <h2 className="mb-4 display-4 fw-bold text-white p-3 rounded">Alboms</h2>
      <div className="mb-4">
        <ol className="album-list">
          {albumsList.map((album, index) => (
            <Album
              key={album.id}
              // handleTodoClick={handlePostClick}
              albumItem={album}
              // handleChange={handleChange}
            >
              {/* {() => setalbumNum(album.id)} */}
            </Album>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Posts;
