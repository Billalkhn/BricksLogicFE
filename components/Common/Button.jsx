import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color:  rgb(98, 216, 249);
color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 20px;    
  
  &:hover {
    background-color: #0056b3;
       color: white;

  }
`;

const CustomButton = ({ onClick, text }) => {
    return <Button onClick={onClick}>{text}</Button>;
};

export default CustomButton;
