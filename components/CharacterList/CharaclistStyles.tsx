import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  background-color: purple;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 20px;
`;

export const CharactersListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export const CharacterCardWrapper = styled.div`
  margin: 10px;
`;
