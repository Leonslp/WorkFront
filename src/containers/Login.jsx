import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//import GoogleIcon from "../assets/IconoGoogle.png";


const Login = () => {
  return (
    <LoginContainer>
      <Title>
        <h1>
        Facil <span>work</span>
        </h1>
      </Title>
      <Subtitle>Ingresar</Subtitle>
      <LoginForm>
        <Input type="text" placeholder="Usuario" />
        <Input type="password" placeholder="Contraseña" />
        <Button>
          <StyledLink to="/ search">Login</StyledLink>
        </Button>
        <Button>
          <StyledLink to="/ preregister">No tengo cuenta</StyledLink>
          </Button>
        {/*
         <Button as="a" href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&emr=1&ltmpl=default&ltmplcache=2&osid=1&passive=true&rm=false&scc=1&service=mail&ss=1&ifkv=AcMMx-cfJQAwc0RDsimf-Jj68KpbAACdkVFt4PdVVjzSt6pZH2rN5DNDct2ZGqbUBdNxXUu4JvWc&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
          <img src={GoogleIcon} alt="Google Login" />
        </Button>
        */}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(43, 58, 73);
`;

const Title = styled.h1`
  h1 {
    color: white;
    font-weight: 100;
    margin: 10px;
    span {
      font-weight: bold;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  margin: 5px;
  width: 100%;
   
  img {
    width: 20px;
    display: flex;
    margin: 0 auto;
  }

  &:hover {
    background-color: gray;
  }

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
