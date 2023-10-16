import gql from 'graphql-tag';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
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
