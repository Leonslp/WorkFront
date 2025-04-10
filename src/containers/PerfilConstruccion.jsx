import React from "react";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import DetallesPersonales from "../components/DetallesPersonales";
import InformaciónAdicional from "../components/InformaciónAdicional";

const PerfilConstruccion = () => {
  return (
    <PerfilGrid>
      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Maestro de obra"
        />
        <InformaciónAdicional
          educacion="Fontanero"
          experiencia="10 años"
          conocimientos={
            "Maestro de obra con sólida experiencia en la supervisión y ejecución de proyectos de construcción residencial y comercial. Experto en coordinar equipos, gestionar recursos y asegurar el cumplimiento de plazos y normas de seguridad. Comprometido con la calidad en cada fase del proyecto y la satisfacción del cliente."
          }
        />
      </PerfilContainer>

      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Maestro de obra"
        />
        <InformaciónAdicional
          educacion="Fontanero"
          experiencia="10 años"
          conocimientos={
            "Maestro de obra con sólida experiencia en la supervisión y ejecución de proyectos de construcción residencial y comercial. Experto en coordinar equipos, gestionar recursos y asegurar el cumplimiento de plazos y normas de seguridad. Comprometido con la calidad en cada fase del proyecto y la satisfacción del cliente."
          }
        />
      </PerfilContainer>

      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Maestro de obra"
        />
        <InformaciónAdicional
          educacion="Fontanero"
          experiencia="10 años"
          conocimientos={
            "Maestro de obra con sólida experiencia en la supervisión y ejecución de proyectos de construcción residencial y comercial. Experto en coordinar equipos, gestionar recursos y asegurar el cumplimiento de plazos y normas de seguridad. Comprometido con la calidad en cada fase del proyecto y la satisfacción del cliente."
          }
        />
      </PerfilContainer>
     
    </PerfilGrid>
  );
};

export default PerfilConstruccion;

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
