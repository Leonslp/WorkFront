import React from "react";
import styled from "styled-components";

import CardContact from "../components/CardContact";

function InfoContact() {
  return (
    <>
    
      <Info>
        <div className="principal-container">
          <CardContact
            name="Santiago Leon"
            country="Colombia"
            image="1"
            job="Reclutador TI"
            company="Autonomic Mind"
            testimony="The old apple revels in its authority. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Fluffy pink unicorns are a popular status symbol among macho men. The beauty of the sunset was obscured by the industrial cranes."
          />

          <CardContact
            name="Santiago Leon"
            country="Colombia"
            image="1"
            job="Reclutador TI"
            company="Autonomic Mind"
            testimony="The old apple revels in its authority. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Fluffy pink unicorns are a popular status symbol among macho men. The beauty of the sunset was obscured by the industrial cranes."
          />

          <CardContact
            name="Santiago Leon"
            country="Colombia"
            image="1"
            job="Reclutador TI"
            company="Autonomic Mind"
            testimony="The old apple revels in its authority. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Fluffy pink unicorns are a popular status symbol among macho men. The beauty of the sunset was obscured by the industrial cranes."
          />

          <CardContact
            name="Santiago Leon"
            country="Colombia"
            image="1"
            job="Reclutador TI"
            company="Autonomic Mind"
            testimony="The old apple revels in its authority. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Fluffy pink unicorns are a popular status symbol among macho men. The beauty of the sunset was obscured by the industrial cranes."
          />
        </div>
      </Info>
    </>
  );
}

export default InfoContact;

const Info = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .principal-container {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }

    .principal-container {
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5em;
    }

    .principal-container {
      padding: 5px;
    }
  }
`;
