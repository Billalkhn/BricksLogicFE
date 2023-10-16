import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0 2px 5px white;
`;

export const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  color: white;
  border-radius: 8px;
  user-select: none;
`;

export const AccordionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: white;
`;

export const AccordionContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  padding: 10px;
  color: white;
  max-height: 150px;
  overflow-y: scroll;
  scrollbar-width: thin;
  transition: max-height 0.3s ease-in-out;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: grey;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: white; /* Set the color to white */
  }
`;
