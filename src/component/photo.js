import React from 'react';

const Photo = ({ photoItem }) => {
  return (
    <img
      src={photoItem.thumbnailUrl}
      alt={photoItem.title}
      key={photoItem.id}
      className="photo-item"
    />
  );
};

export default Photo;
