/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



function CardServices(props) {
  return (
    <Service>
      <div className="card-text-info">
      <img
        className="image-services"
        src={require(`../assets/Imagen ${props.image}.jpg`)}
        alt="Photo"
      />
        <p className="name-service">
          <h1><strong>{props.name}</strong></h1>
        </p>
        <p className="text-service">{props.testimony}</p>
      </div>
      <Button>
        <StyledLink to={props.perfil}>Perfiles</StyledLink>
      </Button>
    </Service>
  );
}

export default CardServices;

const Service = styled.div`
  width: auto;
  height: auto;
  margin: 10px 10px 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 13px 1px rgb(0 0 0 / 100%);

  .image-services {
    max-width: 50%;
    max-height: 50%;
    margin: 10px;
  }

  .card-text-info {
    text-align: center;
    padding: auto;
    font-family: lato, sans-serif;
    font-weight: 10;
    line-height: 1.rem;
  }

  .name-testimony {
    font-size: 1.3rem;
  }

  .job-services {
    font-size: 1.3rem;
    margin-top: 15px;
    padding-bottom: 30px;
  }

  .text-services {
    font-size: 1.1rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    height: auto;

    .card-text-contact {
      padding: 20px;
    }

    .name-testimony,
    .job-testimony,
    .text-testimony {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .name-testimony,
    .job-testimony,
    .text-testimony {
      font-size: 0.9rem;
    }

    .card-text-contact {
      padding: 10px;
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: rgb(43, 58, 73);
  text-decoration: none;
  color: white;
  font-weight: bold;
  display: inline-block;
  border: none;
  display: block;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px auto;
  width: 50%;

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
