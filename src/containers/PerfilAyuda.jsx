import React from "react";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import DetallesPersonales from "../components/DetallesPersonales";
import InformaciónAdicional from "../components/InformaciónAdicional";

const PerfilAyuda = () => {
  return (
    <PerfilGrid>
      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Carpintero"
        />
        <InformaciónAdicional
          educacion="Carpintero"
          experiencia="1 Año"
          conocimientos={
            "Carpintero experimentado en la fabricación, instalación y reparación de muebles y estructuras de madera para proyectos residenciales y comerciales. Hábil en el uso de herramientas especializadas y técnicas de ensamblaje, con enfoque en la precisión y el detalle. Comprometido con la entrega de acabados de alta calidad y la satisfacción del cliente."
          }
        />
      </PerfilContainer>
      
      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Carpintero"
        />
        <InformaciónAdicional
          educacion="Carpintero"
          experiencia="1 Año"
          conocimientos={
            "Carpintero experimentado en la fabricación, instalación y reparación de muebles y estructuras de madera para proyectos residenciales y comerciales. Hábil en el uso de herramientas especializadas y técnicas de ensamblaje, con enfoque en la precisión y el detalle. Comprometido con la entrega de acabados de alta calidad y la satisfacción del cliente."
          }
        />
      </PerfilContainer>

      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Carpintero"
        />
        <InformaciónAdicional
          educacion="Carpintero"
          experiencia="1 Año"
          conocimientos={
            "Carpintero experimentado en la fabricación, instalación y reparación de muebles y estructuras de madera para proyectos residenciales y comerciales. Hábil en el uso de herramientas especializadas y técnicas de ensamblaje, con enfoque en la precisión y el detalle. Comprometido con la entrega de acabados de alta calidad y la satisfacción del cliente."
          }
        />
      </PerfilContainer>
    </PerfilGrid>
  );
};

export default PerfilAyuda;

const PerfilGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PerfilContainer = styled.div`
  background-color: gray;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
