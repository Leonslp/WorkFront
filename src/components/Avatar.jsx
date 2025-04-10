import React from 'react';
import styled from 'styled-components';


const imgSrc = require('../assets/Imagen 1.jpg'); // Adjust the path as necessary
const Avatar = () => {
  return (
    <AvatarContainer>
      <AvatarImage src={imgSrc} alt="Avatar" />
    </AvatarContainer>
  );
};

export default Avatar;

const AvatarContainer = styled.div`
  margin: 10px;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;

  @media (max-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;