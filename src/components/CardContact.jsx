/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import WhatsappIcon from "../assets/IconWhatsapp.png";

function CardContact(props) {
  return (
    <Contact>
      <img
        className="image-contact"
        src={require(`../assets/Imagen ${props.image}.jpg`)}
        alt="Photo"
      />
      <div className="card-text-contact">
        <p className="name-testimony">
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className="job-testimony">
          {props.job} en <strong>{props.company}</strong>
        </p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
      <Button>
        <StyledLink to="/">Perfil</StyledLink>
      </Button>
      <Button as="whatsapp" href="/ ">
        <img src={WhatsappIcon} alt="Whatsapp Contact" />
      </Button>
    </Contact>
  );
}

export default CardContact;

const Contact = styled.div`
  width: 1170px;
  height: 368px;
  margin: 10px 10px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 13px 1px rgb(0 0 0 / 50%);

  .image-contact {
    max-width: 50%;
    max-height: 50%;
  }

  .card-text-contact {
    text-align: center;
    padding: 40px;
    font-family: lato, sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
  }

  .name-testimony {
    font-size: 1.3rem;
  }

  .job-testimony {
    font-size: 1.3rem;
    margin-top: 15px;
    padding-bottom: 30px;
  }

  .text-testimony {
    font-size: 1.1rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
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
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
  width: 100%;

  img {
    width: auto;
    max-width: 17px; 
    height: auto;
    display: flex;
    margin: 0 auto;
  }

  &:hover {
    background-color: gray;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
