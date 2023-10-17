import Card from '../Card';
import { useLazyQuery } from '@apollo/client';
import GET_CHARACTERS from '../../graphQl/queries/getCharacter';
import { useState, useEffect } from 'react';
import {
  CharacterCardWrapper,
  CharactersListContainer,
  PageNavigation,
  SearchButton,
  SearchContainer,
  SearchInput,
  Title,
} from './CharaclistStyles';
import CustomButton from '../Common/Button';
import Loader from '../Common/Loader';

const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters]: any = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searched, setSearched] = useState(false);

  const [loadCharacters, { loading, data, error }] = useLazyQuery(GET_CHARACTERS);

  useEffect(() => {
    if (!loading && !error && data) {
      setCharacters(data.characters.results);
      setFilteredCharacters(data.characters.results);
      setHasNextPage(data.characters.info.next !== null);
      setHasPrevPage(data.characters.info.prev !== null);
      setSearched(false);
    }
  }, [loading, error, data, searchTerm]);

  useEffect(() => {
    loadCharacters({ variables: { page, filter: { name: searchTerm } } });
  }, [page, searchTerm]);

  const loadMore = () => {
    const nextPage = page + 1;
    if (hasNextPage && !searched) {
      setPage(nextPage);
      window.scrollTo(0, 0);
    }
  };

  const loadPrevPage = () => {
    const prevPage = page - 1;
    if (prevPage >= 1 && !searched) {
      setPage(prevPage);
      window.scrollTo(0, 0);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearched(true);
      setPage(1);
    }
  };

  return (
    <div className="App">
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search characters"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <Title>The Rick and Morty Characters</Title>

      {loading ? (
        <Loader />
      ) : (
        <CharactersListContainer>
          {filteredCharacters?.map((character: any) => (
            <CharacterCardWrapper key={character?.id}>
              <Card {...character} />
            </CharacterCardWrapper>
          ))}
        </CharactersListContainer>
      )}
      <PageNavigation>
        {hasPrevPage && !searched && !loading && <CustomButton onClick={loadPrevPage} text="Previous Page" />}
        {hasNextPage && !searched && !loading && <CustomButton onClick={loadMore} text="Next Page" />}
      </PageNavigation>
    </div>
  );
};

export default CharacterList;
