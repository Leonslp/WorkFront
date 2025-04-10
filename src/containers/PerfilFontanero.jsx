import React from "react";
import styled from "styled-components";
import Avatar from "../components/Avatar";
import DetallesPersonales from "../components/DetallesPersonales";
import InformaciónAdicional from "../components/InformaciónAdicional";

const PerfilFontanero = () => {
  return (
    <PerfilGrid>
      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales
          nombre="Juan Perez"
          email="juanperez@example.com"
          ocupacion="Fontanero"
        />
        <InformaciónAdicional
          educacion="Fontanero"
          experiencia="3 años con EPM"
          conocimientos={
            "Fontanero con experiencia en instalación, mantenimiento y reparación de sistemas de fontanería en proyectos residenciales y comerciales. Especializado en resolver problemas de plomería, desde fugas hasta instalaciones de equipos complejos, garantizando calidad y eficiencia. Comprometido con la satisfacción del cliente y con conocimientos actualizados en técnicas y normativas del sector."
          }
        />
      </PerfilContainer>

      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales 
          nombre="Juan Perez" 
          email="juanperez@example.com"
          ocupacion="Fontanero"
        />
        <InformaciónAdicional 
          educacion="Fontanero"
          experiencia="3 años con EPM"
          conocimientos={"Fontanero con experiencia en instalación, mantenimiento y reparación de sistemas de fontanería en proyectos residenciales y comerciales. Especializado en resolver problemas de plomería, desde fugas hasta instalaciones de equipos complejos, garantizando calidad y eficiencia. Comprometido con la satisfacción del cliente y con conocimientos actualizados en técnicas y normativas del sector."}
        />
      </PerfilContainer>
      
      <PerfilContainer>
        <Avatar image="1" />
        <DetallesPersonales 
          nombre="Juan Perez" 
          email="juanperez@example.com"
          ocupacion="Fontanero"
        />
        <InformaciónAdicional 
          educacion="Fontanero"
          experiencia="3 años con EPM"
          conocimientos={"Fontanero con experiencia en instalación, mantenimiento y reparación de sistemas de fontanería en proyectos residenciales y comerciales. Especializado en resolver problemas de plomería, desde fugas hasta instalaciones de equipos complejos, garantizando calidad y eficiencia. Comprometido con la satisfacción del cliente y con conocimientos actualizados en técnicas y normativas del sector."}
        />
      </PerfilContainer>
    </PerfilGrid>
  );
};

export default PerfilFontanero;

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
