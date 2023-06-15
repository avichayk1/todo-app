import React from 'react';

const Post = ({ postItem }) => {
  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const bodyStyle = {
    fontSize: 'medium',
    fontWeight: 'bold',
  };

  return (
    <div className="card mb-3 bg-info">
      <div className="card-body">
        <div className="form-check">
          <label
            className="form-check-label text-white"
            style={titleStyle}
          >
            {postItem.title}
          </label>
          <hr className="my-2" />
          <label
            className="form-check-label text-white"
            style={bodyStyle}
          >
            {postItem.body}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Post;
