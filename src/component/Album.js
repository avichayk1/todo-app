import React from 'react';
import { UserContext } from '../context/UserContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { AlbumContext } from '../context/AlbumContext';

const [albumNum, setalbumNum] = useContext(AlbumContext);

const Album = ({ albumItem }) => {
  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="card mb-3 bg-info">
      <div className="card-body">
        <Link
          to={`/home/${user.id}/albums/${albumItem.id}/photos`}
          state={albumItem.id}
          key={albumItem.id}
          className="album-item-link"
        >
          <div className="album-item">
            <span className="album-title">{albumItem.title}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Album;
