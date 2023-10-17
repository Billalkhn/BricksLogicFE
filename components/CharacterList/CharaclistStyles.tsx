import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: cream;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  width: 100vw;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`;
export const SearchInput = styled.input`
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  max-width: 40%;
  width: 40% !important;
`;

export const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 20px;
  color: black;
  background-color: rgb(98, 216, 249);
  &:hover {
    background-color: #0056b3;
    color: white;
  }
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

export const PageNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  margin-top: 50px;
  background: linear-gradient(110.78deg, rgb(118, 230, 80) 0%, rgb(249, 214, 73) 15%, rgb(98, 216, 249) 100%);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 24px; /* Adjust the font size for smaller screens */
  }
`;
