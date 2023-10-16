import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin: 10px;
  background-color: #5930e5;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  background-color: #5930e5;
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
  max-height: 150px;
  overflow-y: scroll;
`;

type AccordionProps = {
  name: string;
  episodes: string[];
};

const Accordion: React.FC<AccordionProps> = ({ name, episodes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <AccordionTitle>{name}</AccordionTitle>
        <div style={{ color: 'white' }}>{isOpen ? '-' : '+'}</div>
      </AccordionHeader>
      <AccordionContent open={isOpen}>
        {episodes.map((episode, index) => (
          <p key={index}>{episode}</p>
        ))}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
