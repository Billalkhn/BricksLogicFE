import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Adjust the height as needed */
`;

const Spinner = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  &::before {
    content: '';
    position: absolute;
    border: 4px solid transparent;
    border-top: 4px solid transparent;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background: linear-gradient(110.78deg, rgb(118, 230, 80) 0%, rgb(249, 214, 73) 15%, rgb(98, 216, 249) 100%);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <LoaderWrapper>
    <Spinner />
  </LoaderWrapper>
);

export default Loader;
