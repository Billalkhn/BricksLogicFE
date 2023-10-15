import type { NextPage } from 'next';
import styled from 'styled-components';
import VERCEL from '../public/vercel.svg';

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-grow: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: orange;
  font-size: 80px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Container>
        <Title>Next JS BoilerPlate</Title>
        <VERCEL />
      </Container>
    </div>
  );
};

export default Home;
