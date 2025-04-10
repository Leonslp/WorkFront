import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    Photo: "",
    description: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que todos los campos estén completos
    for (const key in formData) {
      if (formData[key] === "") {
        alert(`El campo ${key} es obligatorio`);
        return;
      }
    }
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <FormContainer>
      <Title>
        <h1>
          Facil <span>work</span>
        </h1>
      </Title>
      
      <Form onSubmit={handleSubmit}>
      <h3>Regístrate</h3>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="birthDate"
          placeholder="BirthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="file"
          name="Photo"
          placeholder="Foto"
          value={formData.Photo}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="description"
          placeholder="Descripción de tu perfil"
          value={formData.description}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit">
        <StyledLink to="/ login">Registrar</StyledLink>
        </Button>
        <Button>
        <StyledLink to="/ login">Ya tengo cuenta</StyledLink>
        </Button>
        <Button>
          <StyledLink to={'/ Preregister'}>Atras</StyledLink>
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Register;

const Title = styled.h1`
  h1 {
    color: white;
    font-weight: 400;
    margin: 1px;
    span {
      font-weight: bold;
    }
  }
`;

const FormContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(43, 58, 73);
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: white;
  box-shadow: 0 0 30px black;
  border-radius: 10px;

  h3 {
    color: rgb(43, 58, 73);
    text-align: center;
    margin-top: 0;
  }

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;

  @media (max-width: 300px) {
    padding: 8px;
  }
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
