import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const EnterPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, []);
  return <React.Fragment></React.Fragment>;
};
export default EnterPage;
