import React from "react";
import styled from "styled-components";

import CardServices from "../components/CardServices";

function InfoContact() {
  return (
    <>
      <Info>
        <div className="principal-container">
          <CardServices
            name="Fontaneria"
            image="2"
            testimony= "Aqui podras encontrar todos los perfiles relacionado con arreglos de acueductos y alcantarillados"
            perfil="/ perfilFontanero "
          />

          <CardServices
            name="Ayuda en casa"
            image="3"
            testimony= "Aqui podras encontrar la ayuda que necesitas para algun problema en tu hogar"
            perfil="/ PerfilAyuda"
          />

          <CardServices
            name="Electricidad"
            image="4"
            testimony= "Aqui podras encontrar todo lo relacionado con arreglos de electricidad"
            perfil="/ PerfilElectricidad"
          />

          <CardServices
            name="Construccion"
            image="5"
            testimony= "Aqui podras encontrar todo lo relacionado con la construccion"
            perfil="/ PerfilConstruccion"
          />
        </div>
      </Info>
    </>
  );
}

export default InfoContact;

const Info = styled.div`
  margin: auto;
  padding: auto;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .principal-container {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }

    .principal-container {
      grid-template-columns: repeat(1, 1fr);
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5em;
    }

    .principal-container {
    
      grid-template-columns: 1fr; 
    }
  }
`;
