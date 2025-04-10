import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PreRegister = () => {
  return (
      <Container>
        <Title>
          <h1>
            Facil <span>work</span>
          </h1>
        </Title>
        <Subtitle>¿Cómo te gustaría registrarte?</Subtitle>
        <Button>
        <StyledLink to={'/ RegisterUser'}>Usuario</StyledLink>
        </Button>
        <Button>
          <StyledLink to={'/ RegisterContractor'}>Prestador de Servicios</StyledLink>
        </Button>
        <Button>
          <StyledLink to={'/ login'}>Ya tengo cuenta</StyledLink>
        </Button>
      </Container>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(43, 58, 73);

  &:hover {
    color: white;
  }
`;

export default PreRegister;

const Container = styled.div`
  background-color: rgb(43, 58, 73);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
  text-align: center;

  h1 {
    color: white;
    font-weight: 100;
    margin: 10px;
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: rgb(43, 58, 73);

  &:hover {
    background-color: gray;
    color: white;
  }

  @media (max-width: 768px) {
    width: 150px;
    padding: 8px;
    font-size: 14px;
  }
`;
