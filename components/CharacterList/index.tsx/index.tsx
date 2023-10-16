import Card from '../../Card';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import GET_CHARACTERS from '../../../graphQl/functions/getCharacter';
import { useState, useEffect } from 'react';

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
  const [page, setPage] = useState(1);
  const [characters, setCharacters]: any = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  useEffect(() => {
    // Fetch characters when the component mounts
    if (!loading && !error && data) {
      setCharacters(data.characters.results);
      setHasNextPage(data.characters.info.next !== null);
      setHasPrevPage(data.characters.info.prev !== null);
    }
  }, [loading, error, data]);

  if (loading && characters.length === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const newCharacters = data?.characters?.results;

  const loadMore = () => {
    const nextPage = page + 1;
    if (newCharacters) {
      setCharacters([...newCharacters]);
      setPage(nextPage);
      setHasNextPage(data.characters.info.next !== null);
      setHasPrevPage(data.characters.info.prev !== null);
    }
  };

  const loadPrevPage = () => {
    const prevPage = page - 1;
    if (prevPage >= 1) {
      setPage(prevPage);
      setHasNextPage(true);
    }
  };

  return (
    <div className="App">
      <CharactersListContainer>
        {characters?.map((character: any) => (
          <CharacterCardWrapper key={character?.id}>
            <Card {...character} />
          </CharacterCardWrapper>
        ))}
      </CharactersListContainer>
      {hasPrevPage && <button onClick={loadPrevPage}>Previous Page</button>}
      {hasNextPage && <button onClick={loadMore}>Next Page</button>}
    </div>
  );
};

export default CharacterList;
