import styled from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
  max-height: 150px; /* Set a fixed height to enable the scroll bar always */
  overflow-y: scroll; /* Use "scroll" to always show the scrollbar */
  scrollbar-width: thin; /* Add scrollbar styling */
  scrollbar-color: white #111; /* Add scrollbar styling */
  transition: max-height 0.3s ease-in-out;
`;
