import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;

  color: white;
  border-radius: 8px;
  user-select: none;
`;

const AccordionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: white;
`;
const AccordionContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  padding: 10px;
  color: white;
  max-height: 150px; /* Set a fixed height to enable the scroll bar always */
  overflow-y: scroll; /* Use "scroll" to always show the scrollbar */
  scrollbar-width: thin; /* Add scrollbar styling */
  scrollbar-color: white #111; /* Add scrollbar styling */
  transition: max-height 0.3s ease-in-out;
`;

type AccordionProps = {
  name: string;
  episodes: string[];
  isExpand: boolean;
  toggleExpand: () => void;
};

const Accordion: React.FC<AccordionProps> = ({ name, episodes, isExpand, toggleExpand }) => {
  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleExpand}>
        <AccordionTitle>{name}</AccordionTitle>
        <div>{isExpand ? '▲' : '▼'}</div>
      </AccordionHeader>
      <AccordionContent open={isExpand}>
        {episodes.map((episode, index) => (
          <p key={index}>{episode}</p>
        ))}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
