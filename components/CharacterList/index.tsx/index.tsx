import { Card } from '../../Character';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const characterInfo: object = {
  species: 'Alien',
  type: 'Cat-Person',
  gender: 'Male',
  lastLocation: "Mr. Goldenfold's dream",
  firstEpisode: 'Episode 1',
};

export default function CharacterList() {
  return (
    <div className="App">
      <h2>Character List</h2>
      <CardContainer>
        <Card
          title={' General store Owner'}
          date={1}
          imgUrl={'https://rickandmortyapi.com/api/character/avatar/11.jpeg'}
          status={'Alive'}
          info={characterInfo}
        />
        <Separator />
        <Card
          title={'My Card'}
          date={2}
          imgUrl={'https://rickandmortyapi.com/api/character/avatar/755.jpeg'}
          status={'Alive'}
          info={characterInfo}
        />
        <Separator />
        <Card
          title={'My Card'}
          date={2}
          imgUrl={'https://rickandmortyapi.com/api/character/avatar/396.jpeg'}
          status={'Dead'}
          info={characterInfo}
        />
      </CardContainer>
    </div>
  );
}
