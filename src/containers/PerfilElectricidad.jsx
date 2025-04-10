import React from "react";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import DetallesPersonales from "../components/DetallesPersonales";
import InformaciónAdicional from "../components/InformaciónAdicional";

const PerfilElectricidad = () => {
  return (
    <PerfilGrid>
      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Electricista"
        />
        <InformaciónAdicional
          educacion="Ingeniero Electrico"
          experiencia="2 Años"
          conocimientos={
            "Electricista con amplia experiencia en instalaciones eléctricas residenciales e industriales, incluyendo montaje, reparación y mantenimiento de sistemas eléctricos. Capacitado en la identificación y resolución de fallas, asegurando el cumplimiento de normativas de seguridad. Comprometido con la calidad del trabajo y la satisfacción del cliente."
          }
        />
      </PerfilContainer>

      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Electricista"
        />
        <InformaciónAdicional
          educacion="Ingeniero Electrico"
          experiencia="2 Años"
          conocimientos={
            "Electricista con amplia experiencia en instalaciones eléctricas residenciales e industriales, incluyendo montaje, reparación y mantenimiento de sistemas eléctricos. Capacitado en la identificación y resolución de fallas, asegurando el cumplimiento de normativas de seguridad. Comprometido con la calidad del trabajo y la satisfacción del cliente."
          }
        />
      </PerfilContainer>

      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Electricista"
        />
        <InformaciónAdicional
          educacion="Ingeniero Electrico"
          experiencia="2 Años"
          conocimientos={
            "Electricista con amplia experiencia en instalaciones eléctricas residenciales e industriales, incluyendo montaje, reparación y mantenimiento de sistemas eléctricos. Capacitado en la identificación y resolución de fallas, asegurando el cumplimiento de normativas de seguridad. Comprometido con la calidad del trabajo y la satisfacción del cliente."
          }
        />
      </PerfilContainer>
    </PerfilGrid>
  );
};

export default PerfilElectricidad;

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
