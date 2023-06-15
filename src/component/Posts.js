import React from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { getPosts, getPostsByID } from '../API/posts';
import { UserContext } from '../context/UserContext';
import Post from './Post';
const Posts = (props) => {
  const [postsList, setPostsList] = useState([]);
  const [user, setUser] = useContext(UserContext);
  const [sorting, setSorting] = useState('All'); // default sorting option
  const isLoading = useRef(true);

  useEffect(() => {
    if (isLoading.current) {
      getPostsByID(user.id)
        .then((data) => {
          setPostsList(data);
        })
        .catch((error) => {
          console.log('Error fetching users:', error);
        });
      isLoading.current = false;
    }
  }, [postsList]);

  return (
    <div className="container">
      <h1 className="mb-4 display-4 fw-bold text-white  p-3 rounded">
        PostsList
      </h1>
      <h2 className="mb-4 display-4 fw-bold text-white p-3 rounded">Posts</h2>
      <div className="mb-4">
        {postsList.map((post, index) => (
          <Post
            key={post.id}
            // handleTodoClick={handlePostClick}
            postItem={post}
            // handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};
export default Posts;
