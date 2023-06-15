import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Info = () => {
  const [user, setUser] = useContext(UserContext);
  const [profile, setProfile] = useState(user);
  const infoStyle = {
    backgroundColor: '#333ff0',
    padding: '100px',
    borderRadius: '50px',
    boxShadow: '0 0 8px 8px rgba(255, 255, 255, 0.5)',
  };

  const textStyle = {
    fontWeight: 'bold',
    color: 'white',
  };

  const contentStyle = {
    color: 'white',
  };
  //   useEffect(() => {
  //     setProfile(user);
  //   }, []);
  const renderContent = (label, content) => (
    <p className="card-text">
      <strong style={textStyle}>{label}:</strong>{' '}
      <span style={contentStyle}>{content}</span>
    </p>
  );
  //   if (!profile) return <h1>Loading...</h1>;
  return (
    <div className="container mt-4">
      <h1
        style={textStyle}
        className="mb-4"
      >
        User Information
      </h1>
      <div
        className="card"
        style={infoStyle}
      >
        {
          <div className="card-body">
            {console.log(user)}
            {renderContent('Name', user?.name)}
            {renderContent('Username', user?.username)}
            {renderContent('Email', user?.email)}
            {renderContent(
              'Address',
              `${user?.address?.street}, ${user?.address?.suite}, ${user?.address?.city}, ${user?.address?.zipcode}`
            )}
            {renderContent('Phone', user?.phone)}
            {renderContent('Website', user?.website)}
            {renderContent('Company', user?.company?.name)}
          </div>
        }
      </div>
    </div>
  );
};

export default Info;
