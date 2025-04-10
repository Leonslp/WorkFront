import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function Navbar() {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <h1>
          Facil <span>work</span>
        </h1>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="/ search">Inicio</a>
          <a onClick={handleClick} href="/ services">Servicios</a>
          <a onClick={handleClick} href="/ contact">Contacto</a>
          <a onClick={handleClick} href="/ login">Salir</a>
        </div>
        <div class="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDvi className={`initial ${clicked ? " active" : ''}`}></BgDvi>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  margin: 10px;
  padding: .4rem;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 100);

  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    font-weight: bold;
    
  }

  h1 {
    color: white;
    font-weight: 100;
    span {
      font-weight: bold;
    }
  }

 .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;

    a{
      color: white;
      font-size: 2rem;
      display: block;
      
    }
   

      
    @media (min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      color: white;
      font-size: 2rem;
      margin-top: 1rem;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`
const BgDvi = styled.div`
  background-color: gray;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
