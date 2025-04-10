import React from 'react';
import styled from 'styled-components';
import IconWhatsapp from '../assets/IconWhatsapp.png';

const InformaciónAdicional = ({ educacion, experiencia, conocimientos }) => {
  return (
    <InformaciónContainer>
      <Título>Información Adicional</Título>
      <Info><strong>Educación:</strong> {educacion}</Info>
      <Info><strong>Experiencia:</strong> {experiencia}</Info>
      <Info><strong>Conocimientos:</strong> {conocimientos}</Info>
      <Button>
        <img src={IconWhatsapp} alt="WhatsApp" />
      </Button>
    </InformaciónContainer>
  );
};

export default InformaciónAdicional;

const InformaciónContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Título = styled.h3`
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Info = styled.p`
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  background-color: rgb(43, 58, 73);
  text-decoration: none;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 5px;
  width: 60%;

  img {
    width: auto;
    max-width: 17px; 
    height: auto;
    display: flex;
    margin: 0 auto;
  }

  &:hover {
    background-color: white;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
    width: 50%;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 0.8rem;

    img {
      max-width: 17px;
      background-color: black;
    }
  }
`;
