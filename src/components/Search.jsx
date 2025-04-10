import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';

import PerfilAyuda from '../containers/PerfilAyuda';

const Search = () =>{
  return (
    <>
      <SearchContainer>
        <SearchInput type="text" placeholder="Buscar..." />
      </SearchContainer>
      <PerfilAyuda /> 
    </> 
  );
};

export default Search;


const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  padding: 20px;
  box-sizing: border-box;

`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  box-sizing: border-box;
`;
