import Card from '../../Card';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import GETCHARACTERS from '../../../graphQl/functions/getCharacter';

const CharactersListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #1f2229;
  justify-content: center;
  padding: 20px;
`;

const CharacterCardWrapper = styled.div`
  margin: 10px;
`;

const CharacterList: React.FC = () => {
  const { data } = useQuery(GETCHARACTERS);
  const characters = data.characters.results;

  return (
    <div className="App">
      <CharactersListContainer>
        {characters.map((character: any) => (
          <CharacterCardWrapper key={character?.id}>
            <Card {...character} />
          </CharacterCardWrapper>
        ))}
      </CharactersListContainer>
    </div>
  );
};

export default CharacterList;
