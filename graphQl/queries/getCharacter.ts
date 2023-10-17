import gql from 'graphql-tag';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        next
        prev
        count
      }
      results {
        id
        name
        type
        image
        gender
        status
        species
        location {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`;

export default GET_CHARACTERS;
