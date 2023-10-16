import type { NextPage } from 'next';
import styled from 'styled-components';
import CharacterList from '../components/CharacterList/index.tsx';

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-grow: 1;
  height: 100vh;
  // justify-content: center;
  // align-items: center;
`;

const characters = [
  {
    characterName: 'John Doe',
    isLive: true,
    lastKnownLocation: 'City XYZ',
    firstSeenIn: 2,
    characterImage: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    moreEpisodes: ['Episode 2', 'Episode 3', 'Episode 4'], // Additional episodes
    expanded: false,
  },
  // Add more character objects here
];

const Home: NextPage = () => {
  return <CharacterList />;
};

export default Home;
