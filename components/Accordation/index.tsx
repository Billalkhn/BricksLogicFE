import React, { useState } from 'react';
import styled from 'styled-components';
import { AccordionContainer, AccordionContent, AccordionHeader, AccordionTitle } from './AccordationStyles';

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
