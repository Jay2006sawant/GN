import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin');  // Navigate to admin page route
  };

  return (
    <button onClick={handleAdminClick}>Admin</button>
  );
};

export default HeroSection;
