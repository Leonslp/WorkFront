import React from 'react';
import styled from 'styled-components';

const DetallesPersonales = ({ nombre, email, ocupacion, calificacion }) => {

  const [currentCalificacion, setCurrentCalificacion] = React.useState(calificacion);

  const handleCalificacion = (nuevaCalificacion) => {
    setCurrentCalificacion(nuevaCalificacion);
    console.log(`Nueva calificación: ${nuevaCalificacion}`);
  };

  return (
    <DetallesContainer>
      <Nombre>{nombre}</Nombre>
      <Info><strong>Email:</strong> {email}</Info>
      <Info><strong>Ocupación:</strong> {ocupacion}</Info>
      <Calificacion>
        <strong>Calificación:</strong> {'★'.repeat(currentCalificacion)}{'☆'.repeat(5 - currentCalificacion)}
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              active={star <= currentCalificacion}
              onClick={() => handleCalificacion(star)}
            >
              ★
            </Star>
          ))}
        </div>
      </Calificacion>
    </DetallesContainer>
  );
};

export default DetallesPersonales;

const Calificacion = styled.div`
  margin: 5px 0;
  font-size: 16px;
  color: gold;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Star = styled.span`
  cursor: pointer;
  font-size: 20px;
  color: ${props => (props.active ? 'gold' : 'white')};
  &:hover {
    color: gold;
  }
`;

const DetallesContainer = styled.div`
  margin: 10px;
  padding: 10px;
  
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const Nombre = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Info = styled.p`
  margin: 5px 0;
  color: white;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  strong {
    font-weight: bold;
  }
`;